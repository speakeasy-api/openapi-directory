

import requests
from sdk.models import shared
from . import utils

from .audit_logs import AuditLogs
from .configs import Configs
from .environments import Environments
from .feature_flag_and_setting_values import FeatureFlagAndSettingValues
from .feature_flag_and_setting_values_using_sdk_key import FeatureFlagAndSettingValuesUsingSDKKey
from .feature_flags_and_settings import FeatureFlagsAndSettings
from .integration_links import IntegrationLinks
from .me import Me
from .members import Members
from .organizations import Organizations
from .permission_groups import PermissionGroups
from .products import Products
from .sdk_keys import SDKKeys
from .tags import Tags


SERVERS = [
	"https://api.configcat.com",
]


class SDK:
    
    audit_logs: AuditLogs
    configs: Configs
    environments: Environments
    feature_flag_and_setting_values: FeatureFlagAndSettingValues
    feature_flag_and_setting_values_using_sdk_key: FeatureFlagAndSettingValuesUsingSDKKey
    feature_flags_and_settings: FeatureFlagsAndSettings
    integration_links: IntegrationLinks
    me: Me
    members: Members
    organizations: Organizations
    permission_groups: PermissionGroups
    products: Products
    sdk_keys: SDKKeys
    tags: Tags

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.audit_logs = AuditLogs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.configs = Configs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.environments = Environments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.feature_flag_and_setting_values = FeatureFlagAndSettingValues(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.feature_flag_and_setting_values_using_sdk_key = FeatureFlagAndSettingValuesUsingSDKKey(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.feature_flags_and_settings = FeatureFlagsAndSettings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.integration_links = IntegrationLinks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.me = Me(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.members = Members(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.organizations = Organizations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.permission_groups = PermissionGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.products = Products(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sdk_keys = SDKKeys(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.tags = Tags(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    
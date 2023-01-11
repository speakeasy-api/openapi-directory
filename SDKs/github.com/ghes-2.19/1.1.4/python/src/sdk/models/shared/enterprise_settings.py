import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseAvatar:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseCas:
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseCollectd:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    encryption: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryption') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseCustomer:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key_data') }})
    secret_key_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret_key_data') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseGithubOauth:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    organization_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_name') }})
    organization_team: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_team') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseGithubSsl:
    cert: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cert') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseLdapProfile:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    mail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mail') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseLdapReconciliation:
    org: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseLdap:
    admin_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin_group') }})
    base: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    bind_dn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bind_dn') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    posix_support: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posix_support') }})
    profile: Optional[EnterpriseSettingsEnterpriseLdapProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    reconciliation: Optional[EnterpriseSettingsEnterpriseLdapReconciliation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reconciliation') }})
    recursive_group_search: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recursive_group_search') }})
    search_strategy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_strategy') }})
    sync_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sync_enabled') }})
    team_sync_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_sync_interval') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    user_groups: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_groups') }})
    user_sync_emails: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_sync_emails') }})
    user_sync_interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_sync_interval') }})
    user_sync_keys: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_sync_keys') }})
    virtual_attribute_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtual_attribute_enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseLicense:
    cluster_support: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster_support') }})
    evaluation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluation') }})
    expire_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_at') }})
    perpetual: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perpetual') }})
    seats: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seats') }})
    ssh_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_allowed') }})
    support_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_key') }})
    unlimited_seating: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited_seating') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseMapping:
    basemap: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basemap') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    tileserver: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tileserver') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseNtp:
    primary_server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_server') }})
    secondary_server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary_server') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterprisePages:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseSaml:
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    certificate_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_path') }})
    disable_admin_demote: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disable_admin_demote') }})
    idp_initiated_sso: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idp_initiated_sso') }})
    issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    sso_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sso_url') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseSMTP:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    authentication: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    discard_to_noreply_address: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discard-to-noreply-address') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    enable_starttls_auto: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable_starttls_auto') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    noreply_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noreply_address') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    support_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_address') }})
    support_address_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_address_type') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseSnmp:
    community: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('community') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterpriseSyslog:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    protocol_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol_name') }})
    server: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettingsEnterprise:
    admin_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin_password') }})
    assets: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    auth_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_mode') }})
    avatar: Optional[EnterpriseSettingsEnterpriseAvatar] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar') }})
    cas: Optional[EnterpriseSettingsEnterpriseCas] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cas') }})
    collectd: Optional[EnterpriseSettingsEnterpriseCollectd] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectd') }})
    configuration_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration_id') }})
    configuration_run_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration_run_count') }})
    customer: Optional[EnterpriseSettingsEnterpriseCustomer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    expire_sessions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expire_sessions') }})
    github_hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github_hostname') }})
    github_oauth: Optional[EnterpriseSettingsEnterpriseGithubOauth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github_oauth') }})
    github_ssl: Optional[EnterpriseSettingsEnterpriseGithubSsl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github_ssl') }})
    http_proxy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_proxy') }})
    identicons_host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identicons_host') }})
    ldap: Optional[EnterpriseSettingsEnterpriseLdap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap') }})
    license: Optional[EnterpriseSettingsEnterpriseLicense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    load_balancer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer') }})
    mapping: Optional[EnterpriseSettingsEnterpriseMapping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapping') }})
    ntp: Optional[EnterpriseSettingsEnterpriseNtp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ntp') }})
    pages: Optional[EnterpriseSettingsEnterprisePages] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    private_mode: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_mode') }})
    public_pages: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_pages') }})
    saml: Optional[EnterpriseSettingsEnterpriseSaml] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saml') }})
    signup_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signup_enabled') }})
    smtp: Optional[EnterpriseSettingsEnterpriseSMTP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smtp') }})
    snmp: Optional[EnterpriseSettingsEnterpriseSnmp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snmp') }})
    subdomain_isolation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdomain_isolation') }})
    syslog: Optional[EnterpriseSettingsEnterpriseSyslog] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syslog') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseSettings:
    enterprise: Optional[EnterpriseSettingsEnterprise] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enterprise') }})
    run_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_list') }})
    

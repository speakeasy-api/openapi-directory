import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import additionalauthenticationprovider as shared_additionalauthenticationprovider
from ..shared import authenticationtype_enum as shared_authenticationtype_enum
from ..shared import lambdaauthorizerconfig as shared_lambdaauthorizerconfig
from ..shared import logconfig as shared_logconfig
from ..shared import openidconnectconfig as shared_openidconnectconfig
from ..shared import userpoolconfig as shared_userpoolconfig


@dataclass_json
@dataclasses.dataclass
class GraphqlAPI:
    r"""GraphqlAPI
    Describes a GraphQL API.
    """
    
    additional_authentication_providers: Optional[list[shared_additionalauthenticationprovider.AdditionalAuthenticationProvider]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAuthenticationProviders') }})
    api_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiId') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    authentication_type: Optional[shared_authenticationtype_enum.AuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    lambda_authorizer_config: Optional[shared_lambdaauthorizerconfig.LambdaAuthorizerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaAuthorizerConfig') }})
    log_config: Optional[shared_logconfig.LogConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_id_connect_config: Optional[shared_openidconnectconfig.OpenIDConnectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openIDConnectConfig') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    uris: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    user_pool_config: Optional[shared_userpoolconfig.UserPoolConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolConfig') }})
    waf_web_acl_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wafWebAclArn') }})
    xray_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xrayEnabled') }})
    

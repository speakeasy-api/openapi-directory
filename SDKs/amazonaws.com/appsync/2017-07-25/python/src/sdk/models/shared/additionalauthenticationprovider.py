import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationtype_enum as shared_authenticationtype_enum
from ..shared import lambdaauthorizerconfig as shared_lambdaauthorizerconfig
from ..shared import openidconnectconfig as shared_openidconnectconfig
from ..shared import cognitouserpoolconfig as shared_cognitouserpoolconfig


@dataclass_json
@dataclasses.dataclass
class AdditionalAuthenticationProvider:
    r"""AdditionalAuthenticationProvider
    Describes an additional authentication provider.
    """
    
    authentication_type: Optional[shared_authenticationtype_enum.AuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    lambda_authorizer_config: Optional[shared_lambdaauthorizerconfig.LambdaAuthorizerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaAuthorizerConfig') }})
    open_id_connect_config: Optional[shared_openidconnectconfig.OpenIDConnectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openIDConnectConfig') }})
    user_pool_config: Optional[shared_cognitouserpoolconfig.CognitoUserPoolConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolConfig') }})
    

import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionoauthclientresponseparameters as shared_connectionoauthclientresponseparameters
from ..shared import connectionoauthhttpmethod_enum as shared_connectionoauthhttpmethod_enum
from ..shared import connectionhttpparameters as shared_connectionhttpparameters


@dataclass_json
@dataclasses.dataclass
class ConnectionOAuthResponseParameters:
    r"""ConnectionOAuthResponseParameters
    Contains the response parameters when OAuth is specified as the authorization type.
    """
    
    authorization_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationEndpoint') }})
    client_parameters: Optional[shared_connectionoauthclientresponseparameters.ConnectionOAuthClientResponseParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientParameters') }})
    http_method: Optional[shared_connectionoauthhttpmethod_enum.ConnectionOAuthHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpMethod') }})
    o_auth_http_parameters: Optional[shared_connectionhttpparameters.ConnectionHTTPParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthHttpParameters') }})
    

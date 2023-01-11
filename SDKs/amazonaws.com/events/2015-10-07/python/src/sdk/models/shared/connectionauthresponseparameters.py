import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionapikeyauthresponseparameters as shared_connectionapikeyauthresponseparameters
from ..shared import connectionbasicauthresponseparameters as shared_connectionbasicauthresponseparameters
from ..shared import connectionhttpparameters as shared_connectionhttpparameters
from ..shared import connectionoauthresponseparameters as shared_connectionoauthresponseparameters


@dataclass_json
@dataclasses.dataclass
class ConnectionAuthResponseParameters:
    r"""ConnectionAuthResponseParameters
    Contains the authorization parameters to use for the connection.
    """
    
    api_key_auth_parameters: Optional[shared_connectionapikeyauthresponseparameters.ConnectionAPIKeyAuthResponseParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyAuthParameters') }})
    basic_auth_parameters: Optional[shared_connectionbasicauthresponseparameters.ConnectionBasicAuthResponseParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasicAuthParameters') }})
    invocation_http_parameters: Optional[shared_connectionhttpparameters.ConnectionHTTPParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationHttpParameters') }})
    o_auth_parameters: Optional[shared_connectionoauthresponseparameters.ConnectionOAuthResponseParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthParameters') }})
    

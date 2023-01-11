import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createconnectionoauthclientrequestparameters as shared_createconnectionoauthclientrequestparameters
from ..shared import connectionoauthhttpmethod_enum as shared_connectionoauthhttpmethod_enum
from ..shared import connectionhttpparameters as shared_connectionhttpparameters


@dataclass_json
@dataclasses.dataclass
class CreateConnectionOAuthRequestParameters:
    r"""CreateConnectionOAuthRequestParameters
    Contains the OAuth authorization parameters to use for the connection.
    """
    
    authorization_endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationEndpoint') }})
    client_parameters: shared_createconnectionoauthclientrequestparameters.CreateConnectionOAuthClientRequestParameters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientParameters') }})
    http_method: shared_connectionoauthhttpmethod_enum.ConnectionOAuthHTTPMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpMethod') }})
    o_auth_http_parameters: Optional[shared_connectionhttpparameters.ConnectionHTTPParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthHttpParameters') }})
    

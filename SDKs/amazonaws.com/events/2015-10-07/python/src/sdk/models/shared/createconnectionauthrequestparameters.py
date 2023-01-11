import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createconnectionapikeyauthrequestparameters as shared_createconnectionapikeyauthrequestparameters
from ..shared import createconnectionbasicauthrequestparameters as shared_createconnectionbasicauthrequestparameters
from ..shared import connectionhttpparameters as shared_connectionhttpparameters
from ..shared import createconnectionoauthrequestparameters as shared_createconnectionoauthrequestparameters


@dataclass_json
@dataclasses.dataclass
class CreateConnectionAuthRequestParameters:
    r"""CreateConnectionAuthRequestParameters
    Contains the authorization parameters for the connection.
    """
    
    api_key_auth_parameters: Optional[shared_createconnectionapikeyauthrequestparameters.CreateConnectionAPIKeyAuthRequestParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyAuthParameters') }})
    basic_auth_parameters: Optional[shared_createconnectionbasicauthrequestparameters.CreateConnectionBasicAuthRequestParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasicAuthParameters') }})
    invocation_http_parameters: Optional[shared_connectionhttpparameters.ConnectionHTTPParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationHttpParameters') }})
    o_auth_parameters: Optional[shared_createconnectionoauthrequestparameters.CreateConnectionOAuthRequestParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthParameters') }})
    

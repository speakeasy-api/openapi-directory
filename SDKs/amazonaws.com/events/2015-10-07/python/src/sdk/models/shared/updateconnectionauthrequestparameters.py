import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateconnectionapikeyauthrequestparameters as shared_updateconnectionapikeyauthrequestparameters
from ..shared import updateconnectionbasicauthrequestparameters as shared_updateconnectionbasicauthrequestparameters
from ..shared import connectionhttpparameters as shared_connectionhttpparameters
from ..shared import updateconnectionoauthrequestparameters as shared_updateconnectionoauthrequestparameters


@dataclass_json
@dataclasses.dataclass
class UpdateConnectionAuthRequestParameters:
    r"""UpdateConnectionAuthRequestParameters
    Contains the additional parameters to use for the connection.
    """
    
    api_key_auth_parameters: Optional[shared_updateconnectionapikeyauthrequestparameters.UpdateConnectionAPIKeyAuthRequestParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyAuthParameters') }})
    basic_auth_parameters: Optional[shared_updateconnectionbasicauthrequestparameters.UpdateConnectionBasicAuthRequestParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BasicAuthParameters') }})
    invocation_http_parameters: Optional[shared_connectionhttpparameters.ConnectionHTTPParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationHttpParameters') }})
    o_auth_parameters: Optional[shared_updateconnectionoauthrequestparameters.UpdateConnectionOAuthRequestParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthParameters') }})
    

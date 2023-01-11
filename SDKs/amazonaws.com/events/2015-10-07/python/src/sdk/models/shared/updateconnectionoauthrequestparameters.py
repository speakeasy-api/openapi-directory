import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateconnectionoauthclientrequestparameters as shared_updateconnectionoauthclientrequestparameters
from ..shared import connectionoauthhttpmethod_enum as shared_connectionoauthhttpmethod_enum
from ..shared import connectionhttpparameters as shared_connectionhttpparameters


@dataclass_json
@dataclasses.dataclass
class UpdateConnectionOAuthRequestParameters:
    r"""UpdateConnectionOAuthRequestParameters
    Contains the OAuth request parameters to use for the connection.
    """
    
    authorization_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationEndpoint') }})
    client_parameters: Optional[shared_updateconnectionoauthclientrequestparameters.UpdateConnectionOAuthClientRequestParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientParameters') }})
    http_method: Optional[shared_connectionoauthhttpmethod_enum.ConnectionOAuthHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpMethod') }})
    o_auth_http_parameters: Optional[shared_connectionhttpparameters.ConnectionHTTPParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OAuthHttpParameters') }})
    

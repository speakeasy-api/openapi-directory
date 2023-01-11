import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectoroauthrequest as shared_connectoroauthrequest


@dataclass_json
@dataclasses.dataclass
class ZendeskConnectorProfileCredentials:
    r"""ZendeskConnectorProfileCredentials
     The connector-specific profile credentials required when using Zendesk. 
    """
    
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    o_auth_request: Optional[shared_connectoroauthrequest.ConnectorOAuthRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthRequest') }})
    

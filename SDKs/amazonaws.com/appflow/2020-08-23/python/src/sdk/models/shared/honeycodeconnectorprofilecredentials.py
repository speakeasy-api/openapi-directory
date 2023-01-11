import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectoroauthrequest as shared_connectoroauthrequest


@dataclass_json
@dataclasses.dataclass
class HoneycodeConnectorProfileCredentials:
    r"""HoneycodeConnectorProfileCredentials
     The connector-specific credentials required when using Amazon Honeycode. 
    """
    
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    o_auth_request: Optional[shared_connectoroauthrequest.ConnectorOAuthRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oAuthRequest') }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    

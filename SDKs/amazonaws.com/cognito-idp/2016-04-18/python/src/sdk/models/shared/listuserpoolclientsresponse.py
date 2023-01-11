import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpoolclientdescription as shared_userpoolclientdescription


@dataclass_json
@dataclasses.dataclass
class ListUserPoolClientsResponse:
    r"""ListUserPoolClientsResponse
    Represents the response from the server that lists user pool clients.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    user_pool_clients: Optional[list[shared_userpoolclientdescription.UserPoolClientDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolClients') }})
    

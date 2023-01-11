import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usertype as shared_usertype


@dataclass_json
@dataclasses.dataclass
class AdminCreateUserResponse:
    r"""AdminCreateUserResponse
    Represents the response from the server to the request to create the user.
    """
    
    user: Optional[shared_usertype.UserType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    

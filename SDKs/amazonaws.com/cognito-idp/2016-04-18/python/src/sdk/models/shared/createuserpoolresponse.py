import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpooltype as shared_userpooltype


@dataclass_json
@dataclasses.dataclass
class CreateUserPoolResponse:
    r"""CreateUserPoolResponse
    Represents the response from the server for the request to create a user pool.
    """
    
    user_pool: Optional[shared_userpooltype.UserPoolType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPool') }})
    

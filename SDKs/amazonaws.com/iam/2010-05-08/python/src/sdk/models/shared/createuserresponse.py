import dataclasses
from typing import Optional
from ..shared import user as shared_user


@dataclasses.dataclass
class CreateUserResponse:
    r"""CreateUserResponse
    Contains the response to a successful <a>CreateUser</a> request. 
    """
    
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    

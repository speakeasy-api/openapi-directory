import dataclasses
from ..shared import user as shared_user


@dataclasses.dataclass
class GetUserResponse:
    r"""GetUserResponse
    Contains the response to a successful <a>GetUser</a> request. 
    """
    
    user: shared_user.User = dataclasses.field()
    

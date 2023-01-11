import dataclasses
from ..shared import role as shared_role


@dataclasses.dataclass
class GetRoleResponse:
    r"""GetRoleResponse
    Contains the response to a successful <a>GetRole</a> request. 
    """
    
    role: shared_role.Role = dataclasses.field()
    

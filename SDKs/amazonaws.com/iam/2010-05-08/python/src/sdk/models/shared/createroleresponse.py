import dataclasses
from ..shared import role as shared_role


@dataclasses.dataclass
class CreateRoleResponse:
    r"""CreateRoleResponse
    Contains the response to a successful <a>CreateRole</a> request. 
    """
    
    role: shared_role.Role = dataclasses.field()
    

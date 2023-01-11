import dataclasses
from typing import Optional
from ..shared import role as shared_role


@dataclasses.dataclass
class CreateServiceLinkedRoleResponse:
    role: Optional[shared_role.Role] = dataclasses.field(default=None)
    

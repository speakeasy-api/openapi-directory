import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import rolemapping as shared_rolemapping


@dataclasses.dataclass
class ListRoleMappingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    role_mappings: Optional[list[shared_rolemapping.RoleMapping]] = dataclasses.field(default=None)
    

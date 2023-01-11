import dataclasses
from typing import Optional
from ..shared import rolemapping as shared_rolemapping
from ..shared import error as shared_error


@dataclasses.dataclass
class CreateRoleMappingRequest:
    request: shared_rolemapping.RoleMapping = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRoleMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    

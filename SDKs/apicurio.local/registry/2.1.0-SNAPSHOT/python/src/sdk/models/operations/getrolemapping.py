import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import rolemapping as shared_rolemapping


@dataclasses.dataclass
class GetRoleMappingPathParams:
    principal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'principalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRoleMappingRequest:
    path_params: GetRoleMappingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRoleMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    role_mapping: Optional[shared_rolemapping.RoleMapping] = dataclasses.field(default=None)
    

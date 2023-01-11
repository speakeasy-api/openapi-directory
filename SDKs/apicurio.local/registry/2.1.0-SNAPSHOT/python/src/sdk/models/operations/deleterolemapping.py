import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteRoleMappingPathParams:
    principal_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'principalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRoleMappingRequest:
    path_params: DeleteRoleMappingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRoleMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    

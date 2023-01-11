import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteArtifactsInGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteArtifactsInGroupRequest:
    path_params: DeleteArtifactsInGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteArtifactsInGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    

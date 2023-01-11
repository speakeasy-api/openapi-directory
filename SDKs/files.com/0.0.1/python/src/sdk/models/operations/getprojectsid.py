import dataclasses
from typing import Optional
from ..shared import projectentity as shared_projectentity


@dataclasses.dataclass
class GetProjectsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectsIDRequest:
    path_params: GetProjectsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project_entity: Optional[shared_projectentity.ProjectEntity] = dataclasses.field(default=None)
    

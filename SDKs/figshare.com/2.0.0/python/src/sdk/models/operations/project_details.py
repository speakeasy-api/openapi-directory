import dataclasses
from typing import Optional
from ..shared import projectcomplete as shared_projectcomplete


@dataclasses.dataclass
class ProjectDetailsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectDetailsRequest:
    path_params: ProjectDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project_complete: Optional[shared_projectcomplete.ProjectComplete] = dataclasses.field(default=None)
    

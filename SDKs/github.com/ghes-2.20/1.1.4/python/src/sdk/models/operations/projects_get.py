import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import project as shared_project


@dataclasses.dataclass
class ProjectsGetPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsGetRequest:
    path_params: ProjectsGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    

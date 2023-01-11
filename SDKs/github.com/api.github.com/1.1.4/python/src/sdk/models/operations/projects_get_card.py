import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import project_card as shared_project_card


@dataclasses.dataclass
class ProjectsGetCardPathParams:
    card_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsGetCardRequest:
    path_params: ProjectsGetCardPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsGetCardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    project_card: Optional[shared_project_card.ProjectCard] = dataclasses.field(default=None)
    

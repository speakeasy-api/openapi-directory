import dataclasses
from typing import Optional
from enum import Enum
from ..shared import column_id_enum as shared_column_id_enum
from ..shared import basic_error as shared_basic_error
from ..shared import project_card as shared_project_card


@dataclasses.dataclass
class ProjectsListCardsPathParams:
    column_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsListCardsQueryParams:
    archived_state: Optional[shared_column_id_enum.ColumnIDEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'archived_state', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProjectsListCardsRequest:
    path_params: ProjectsListCardsPathParams = dataclasses.field()
    query_params: ProjectsListCardsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsListCardsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    project_cards: Optional[list[shared_project_card.ProjectCard]] = dataclasses.field(default=None)
    

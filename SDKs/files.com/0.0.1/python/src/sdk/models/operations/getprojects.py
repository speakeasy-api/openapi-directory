import dataclasses
from typing import Optional
from ..shared import projectentity as shared_projectentity


@dataclasses.dataclass
class GetProjectsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectsRequest:
    query_params: GetProjectsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project_entities: Optional[list[shared_projectentity.ProjectEntity]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import projectssearch as shared_projectssearch
from ..shared import project as shared_project


@dataclasses.dataclass
class ProjectsSearchRequest:
    request: Optional[shared_projectssearch.ProjectsSearch] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProjectsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    projects: Optional[list[shared_project.Project]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import projectssearch as shared_projectssearch
from ..shared import projectprivate as shared_projectprivate


@dataclasses.dataclass
class PrivateProjectsSearchRequest:
    request: Optional[shared_projectssearch.ProjectsSearch] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PrivateProjectsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project_privates: Optional[list[shared_projectprivate.ProjectPrivate]] = dataclasses.field(default=None)
    

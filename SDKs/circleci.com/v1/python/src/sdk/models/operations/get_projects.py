import dataclasses
from typing import Optional
from ..shared import project as shared_project


@dataclasses.dataclass
class GetProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    projects: Optional[list[shared_project.Project]] = dataclasses.field(default=None)
    

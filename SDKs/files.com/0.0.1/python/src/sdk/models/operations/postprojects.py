import dataclasses
from typing import Optional
from ..shared import projectentity as shared_projectentity


@dataclasses.dataclass
class PostProjectsRequestBody:
    global_access: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'global_access' }})
    

@dataclasses.dataclass
class PostProjectsRequest:
    request: PostProjectsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project_entity: Optional[shared_projectentity.ProjectEntity] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import projectentity as shared_projectentity


@dataclasses.dataclass
class PatchProjectsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchProjectsIDRequestBody:
    global_access: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'global_access' }})
    

@dataclasses.dataclass
class PatchProjectsIDRequest:
    path_params: PatchProjectsIDPathParams = dataclasses.field()
    request: PatchProjectsIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchProjectsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project_entity: Optional[shared_projectentity.ProjectEntity] = dataclasses.field(default=None)
    

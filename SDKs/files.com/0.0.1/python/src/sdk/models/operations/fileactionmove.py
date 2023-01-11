import dataclasses
from typing import Optional
from ..shared import fileactionentity as shared_fileactionentity


@dataclasses.dataclass
class FileActionMovePathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FileActionMoveRequestBody:
    destination: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'destination' }})
    

@dataclasses.dataclass
class FileActionMoveRequest:
    path_params: FileActionMovePathParams = dataclasses.field()
    request: FileActionMoveRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class FileActionMoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_action_entity: Optional[shared_fileactionentity.FileActionEntity] = dataclasses.field(default=None)
    

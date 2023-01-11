import dataclasses
from typing import Optional
from ..shared import fileactionentity as shared_fileactionentity


@dataclasses.dataclass
class FileActionCopyPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FileActionCopyRequestBody:
    destination: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'destination' }})
    structure: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'structure' }})
    

@dataclasses.dataclass
class FileActionCopyRequest:
    path_params: FileActionCopyPathParams = dataclasses.field()
    request: FileActionCopyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class FileActionCopyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_action_entity: Optional[shared_fileactionentity.FileActionEntity] = dataclasses.field(default=None)
    

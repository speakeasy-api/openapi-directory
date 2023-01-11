import dataclasses
from typing import Optional
from ..shared import fileuploadpartentity as shared_fileuploadpartentity


@dataclasses.dataclass
class FileActionBeginUploadPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FileActionBeginUploadRequestBody:
    mkdir_parents: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'mkdir_parents' }})
    part: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'part' }})
    parts: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'parts' }})
    ref: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'ref' }})
    restart: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'restart' }})
    with_rename: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'with_rename' }})
    

@dataclasses.dataclass
class FileActionBeginUploadRequest:
    path_params: FileActionBeginUploadPathParams = dataclasses.field()
    request: Optional[FileActionBeginUploadRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class FileActionBeginUploadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_upload_part_entities: Optional[list[shared_fileuploadpartentity.FileUploadPartEntity]] = dataclasses.field(default=None)
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import fileentity as shared_fileentity


@dataclasses.dataclass
class PatchFilesPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchFilesPathRequestBody:
    priority_color: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'priority_color' }})
    provided_mtime: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'provided_mtime' }})
    

@dataclasses.dataclass
class PatchFilesPathRequest:
    path_params: PatchFilesPathPathParams = dataclasses.field()
    request: Optional[PatchFilesPathRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchFilesPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_entity: Optional[shared_fileentity.FileEntity] = dataclasses.field(default=None)
    

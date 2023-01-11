import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import fileentity as shared_fileentity


@dataclasses.dataclass
class PostFilesPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostFilesPathRequestBody:
    etags_etag_: list[str] = dataclasses.field(metadata={'multipart_form': { 'field_name': 'etags[etag]', 'json': True }})
    etags_part_: list[int] = dataclasses.field(metadata={'multipart_form': { 'field_name': 'etags[part]', 'json': True }})
    action: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'length' }})
    mkdir_parents: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'mkdir_parents' }})
    part: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'part' }})
    parts: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'parts' }})
    provided_mtime: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'provided_mtime' }})
    ref: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'ref' }})
    restart: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'restart' }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'size' }})
    structure: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'structure' }})
    with_rename: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'with_rename' }})
    

@dataclasses.dataclass
class PostFilesPathRequest:
    path_params: PostFilesPathPathParams = dataclasses.field()
    request: Optional[PostFilesPathRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostFilesPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_entity: Optional[shared_fileentity.FileEntity] = dataclasses.field(default=None)
    

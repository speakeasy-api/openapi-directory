import dataclasses
from typing import Optional
from ..shared import fileentity as shared_fileentity


@dataclasses.dataclass
class FileDownloadPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FileDownloadQueryParams:
    action: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    preview_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'preview_size', 'style': 'form', 'explode': True }})
    with_previews: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with_previews', 'style': 'form', 'explode': True }})
    with_priority_color: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with_priority_color', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FileDownloadRequest:
    path_params: FileDownloadPathParams = dataclasses.field()
    query_params: FileDownloadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FileDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_entity: Optional[shared_fileentity.FileEntity] = dataclasses.field(default=None)
    

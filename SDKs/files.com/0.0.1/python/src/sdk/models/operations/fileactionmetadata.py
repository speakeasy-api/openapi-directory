import dataclasses
from typing import Optional
from ..shared import fileentity as shared_fileentity


@dataclasses.dataclass
class FileActionMetadataPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FileActionMetadataQueryParams:
    preview_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'preview_size', 'style': 'form', 'explode': True }})
    with_previews: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with_previews', 'style': 'form', 'explode': True }})
    with_priority_color: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with_priority_color', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FileActionMetadataRequest:
    path_params: FileActionMetadataPathParams = dataclasses.field()
    query_params: FileActionMetadataQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FileActionMetadataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_entity: Optional[shared_fileentity.FileEntity] = dataclasses.field(default=None)
    

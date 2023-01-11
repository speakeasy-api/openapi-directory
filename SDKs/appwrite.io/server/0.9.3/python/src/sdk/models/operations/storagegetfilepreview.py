import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class StorageGetFilePreviewPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StorageGetFilePreviewQueryParams:
    background: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'background', 'style': 'form', 'explode': True }})
    border_color: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'borderColor', 'style': 'form', 'explode': True }})
    border_radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'borderRadius', 'style': 'form', 'explode': True }})
    border_width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'borderWidth', 'style': 'form', 'explode': True }})
    gravity: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gravity', 'style': 'form', 'explode': True }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    opacity: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opacity', 'style': 'form', 'explode': True }})
    output: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    quality: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    rotation: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rotation', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StorageGetFilePreviewSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class StorageGetFilePreviewRequest:
    path_params: StorageGetFilePreviewPathParams = dataclasses.field()
    query_params: StorageGetFilePreviewQueryParams = dataclasses.field()
    security: StorageGetFilePreviewSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StorageGetFilePreviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

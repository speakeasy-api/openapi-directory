import dataclasses
from typing import Optional
from ..shared import fileentity as shared_fileentity


@dataclasses.dataclass
class FolderListForPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FolderListForPathQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    preview_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'preview_size', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    search_all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_all', 'style': 'form', 'explode': True }})
    with_previews: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with_previews', 'style': 'form', 'explode': True }})
    with_priority_color: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with_priority_color', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FolderListForPathRequest:
    path_params: FolderListForPathPathParams = dataclasses.field()
    query_params: FolderListForPathQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FolderListForPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_entities: Optional[list[shared_fileentity.FileEntity]] = dataclasses.field(default=None)
    

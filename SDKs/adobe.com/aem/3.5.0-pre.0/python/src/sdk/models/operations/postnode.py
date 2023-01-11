import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostNodePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostNodeQueryParams:
    operation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': ':operation', 'style': 'form', 'explode': True }})
    delete_authorizable: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deleteAuthorizable', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostNodeRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class PostNodeRequestBody:
    file: Optional[PostNodeRequestBodyFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PostNodeRequest:
    path_params: PostNodePathParams = dataclasses.field()
    query_params: PostNodeQueryParams = dataclasses.field()
    request: Optional[PostNodeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

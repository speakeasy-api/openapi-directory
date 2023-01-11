import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostNodeRwPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostNodeRwQueryParams:
    add_members: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'addMembers', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostNodeRwRequest:
    path_params: PostNodeRwPathParams = dataclasses.field()
    query_params: PostNodeRwQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostNodeRwResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostContainersCreateQueryParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostContainersCreateHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersCreateRequest:
    headers: PostContainersCreateHeaders = dataclasses.field()
    query_params: PostContainersCreateQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostContainersCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    container_id: Optional[Any] = dataclasses.field(default=None)
    

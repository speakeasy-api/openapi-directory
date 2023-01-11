import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostVolumesNamePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostVolumesNameHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostVolumesNameRequest:
    headers: PostVolumesNameHeaders = dataclasses.field()
    path_params: PostVolumesNamePathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostVolumesNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    volume: Optional[Any] = dataclasses.field(default=None)
    

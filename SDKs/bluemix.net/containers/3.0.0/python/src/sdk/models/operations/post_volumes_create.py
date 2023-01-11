import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostVolumesCreateQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    fs_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fsName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostVolumesCreateHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostVolumesCreateRequest:
    headers: PostVolumesCreateHeaders = dataclasses.field()
    query_params: PostVolumesCreateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostVolumesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    volume: Optional[Any] = dataclasses.field(default=None)
    

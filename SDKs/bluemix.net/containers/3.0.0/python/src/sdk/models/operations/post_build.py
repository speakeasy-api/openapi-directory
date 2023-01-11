import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostBuildQueryParams:
    t: str = dataclasses.field(metadata={'query_param': { 'field_name': 't', 'style': 'form', 'explode': True }})
    nocache: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nocache', 'style': 'form', 'explode': True }})
    pull: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pull', 'style': 'form', 'explode': True }})
    q: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostBuildHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostBuildRequest:
    headers: PostBuildHeaders = dataclasses.field()
    query_params: PostBuildQueryParams = dataclasses.field()
    request: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/tar' }})
    

@dataclasses.dataclass
class PostBuildResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostContainersNameOrIDStopPathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDStopQueryParams:
    t: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostContainersNameOrIDStopHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDStopRequest:
    headers: PostContainersNameOrIDStopHeaders = dataclasses.field()
    path_params: PostContainersNameOrIDStopPathParams = dataclasses.field()
    query_params: PostContainersNameOrIDStopQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostContainersNameOrIDStopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

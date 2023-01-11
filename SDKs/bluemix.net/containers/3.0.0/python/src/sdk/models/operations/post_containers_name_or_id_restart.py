import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostContainersNameOrIDRestartPathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDRestartQueryParams:
    t: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 't', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostContainersNameOrIDRestartHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostContainersNameOrIDRestartRequest:
    headers: PostContainersNameOrIDRestartHeaders = dataclasses.field()
    path_params: PostContainersNameOrIDRestartPathParams = dataclasses.field()
    query_params: PostContainersNameOrIDRestartQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostContainersNameOrIDRestartResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

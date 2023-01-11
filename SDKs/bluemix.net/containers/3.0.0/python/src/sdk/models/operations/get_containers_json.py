import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetContainersJSONQueryParams:
    all: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    filters: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetContainersJSONHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersJSONRequest:
    headers: GetContainersJSONHeaders = dataclasses.field()
    query_params: GetContainersJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContainersJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    containers: Optional[list[Any]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetContainersNameOrIDJSONPathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersNameOrIDJSONHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersNameOrIDJSONRequest:
    headers: GetContainersNameOrIDJSONHeaders = dataclasses.field()
    path_params: GetContainersNameOrIDJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContainersNameOrIDJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    container_info: Optional[Any] = dataclasses.field(default=None)
    

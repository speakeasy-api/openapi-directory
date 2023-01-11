import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetVolumesNameJSONPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVolumesNameJSONHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVolumesNameJSONRequest:
    headers: GetVolumesNameJSONHeaders = dataclasses.field()
    path_params: GetVolumesNameJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVolumesNameJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    volume: Optional[Any] = dataclasses.field(default=None)
    

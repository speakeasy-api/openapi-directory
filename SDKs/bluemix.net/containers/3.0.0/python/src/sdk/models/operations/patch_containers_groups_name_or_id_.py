import dataclasses
from typing import Any


@dataclasses.dataclass
class PatchContainersGroupsNameOrIDPathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchContainersGroupsNameOrIDHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchContainersGroupsNameOrIDRequest:
    headers: PatchContainersGroupsNameOrIDHeaders = dataclasses.field()
    path_params: PatchContainersGroupsNameOrIDPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchContainersGroupsNameOrIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

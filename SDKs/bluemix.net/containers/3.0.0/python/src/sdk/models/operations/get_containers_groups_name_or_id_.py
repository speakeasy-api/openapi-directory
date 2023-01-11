import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetContainersGroupsNameOrIDPathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersGroupsNameOrIDHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersGroupsNameOrIDRequest:
    headers: GetContainersGroupsNameOrIDHeaders = dataclasses.field()
    path_params: GetContainersGroupsNameOrIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContainersGroupsNameOrIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    containers_groups_name_or_id_get_details: Optional[Any] = dataclasses.field(default=None)
    

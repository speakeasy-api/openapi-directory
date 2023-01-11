import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetContainersGroupsHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContainersGroupsRequest:
    headers: GetContainersGroupsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetContainersGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    containers_groups_get_list_items: Optional[list[Any]] = dataclasses.field(default=None)
    

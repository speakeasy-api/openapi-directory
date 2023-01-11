import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteContainersGroupsNameOrIDPathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteContainersGroupsNameOrIDQueryParams:
    force: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteContainersGroupsNameOrIDHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteContainersGroupsNameOrIDRequest:
    headers: DeleteContainersGroupsNameOrIDHeaders = dataclasses.field()
    path_params: DeleteContainersGroupsNameOrIDPathParams = dataclasses.field()
    query_params: DeleteContainersGroupsNameOrIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteContainersGroupsNameOrIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

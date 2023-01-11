import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteContainersNameOrIDPathParams:
    name_or_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteContainersNameOrIDQueryParams:
    force: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteContainersNameOrIDHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteContainersNameOrIDRequest:
    headers: DeleteContainersNameOrIDHeaders = dataclasses.field()
    path_params: DeleteContainersNameOrIDPathParams = dataclasses.field()
    query_params: DeleteContainersNameOrIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteContainersNameOrIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

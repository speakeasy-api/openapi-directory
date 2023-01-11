import dataclasses
from typing import Optional
from ..shared import userentity as shared_userentity


@dataclasses.dataclass
class GetUsersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersIDRequest:
    path_params: GetUsersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_entity: Optional[shared_userentity.UserEntity] = dataclasses.field(default=None)
    

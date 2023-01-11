import dataclasses
from typing import Optional
from ..shared import userrequestentity as shared_userrequestentity


@dataclasses.dataclass
class GetUserRequestsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserRequestsIDRequest:
    path_params: GetUserRequestsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserRequestsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_request_entity: Optional[shared_userrequestentity.UserRequestEntity] = dataclasses.field(default=None)
    

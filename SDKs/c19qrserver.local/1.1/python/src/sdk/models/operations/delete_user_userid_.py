import dataclasses
from typing import Optional
from ..shared import invalidtoken as shared_invalidtoken


@dataclasses.dataclass
class DeleteUserUserIDPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserUserIDRequest:
    path_params: DeleteUserUserIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    

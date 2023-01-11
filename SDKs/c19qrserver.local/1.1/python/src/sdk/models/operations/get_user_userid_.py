import dataclasses
from typing import Optional
from ..shared import invalidtoken as shared_invalidtoken
from ..shared import userrecord as shared_userrecord


@dataclasses.dataclass
class GetUserUserIDPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserUserIDRequest:
    path_params: GetUserUserIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    user_record: Optional[shared_userrecord.UserRecord] = dataclasses.field(default=None)
    

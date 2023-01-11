import dataclasses
from typing import Optional
from ..shared import invalidtoken as shared_invalidtoken
from ..shared import userrecord as shared_userrecord


@dataclasses.dataclass
class GetUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[shared_invalidtoken.InvalidToken] = dataclasses.field(default=None)
    user_records: Optional[list[shared_userrecord.UserRecord]] = dataclasses.field(default=None)
    

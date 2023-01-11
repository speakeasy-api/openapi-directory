import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import userinfo as shared_userinfo


@dataclasses.dataclass
class GetCurrentUserInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user_info: Optional[shared_userinfo.UserInfo] = dataclasses.field(default=None)
    

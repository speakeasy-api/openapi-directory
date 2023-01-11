import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import userfriendinfo as shared_userfriendinfo


@dataclasses.dataclass
class GetFriendInfoPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFriendInfoHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFriendInfoRequest:
    headers: GetFriendInfoHeaders = dataclasses.field()
    path_params: GetFriendInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFriendInfoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    user_friend_info: Optional[shared_userfriendinfo.UserFriendInfo] = dataclasses.field(default=None)
    

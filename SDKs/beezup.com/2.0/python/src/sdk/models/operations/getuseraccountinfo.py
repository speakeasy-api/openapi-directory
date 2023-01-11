import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import accountinfo as shared_accountinfo


@dataclasses.dataclass
class GetUserAccountInfoHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserAccountInfoRequest:
    headers: GetUserAccountInfoHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetUserAccountInfoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    account_info: Optional[shared_accountinfo.AccountInfo] = dataclasses.field(default=None)
    

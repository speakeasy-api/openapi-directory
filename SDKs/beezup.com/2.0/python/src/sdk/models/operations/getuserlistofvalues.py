import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import userlistofvaluesresponse as shared_userlistofvaluesresponse


@dataclasses.dataclass
class GetUserListOfValuesPathParams:
    list_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'listName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserListOfValuesHeaders:
    accept_language: Optional[list[str]] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserListOfValuesRequest:
    headers: GetUserListOfValuesHeaders = dataclasses.field()
    path_params: GetUserListOfValuesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserListOfValuesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    user_list_of_values_response: Optional[shared_userlistofvaluesresponse.UserListOfValuesResponse] = dataclasses.field(default=None)
    

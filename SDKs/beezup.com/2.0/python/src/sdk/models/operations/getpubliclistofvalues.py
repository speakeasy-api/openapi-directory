import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import publiclistofvaluesresponse as shared_publiclistofvaluesresponse


@dataclasses.dataclass
class GetPublicListOfValuesPathParams:
    list_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'listName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPublicListOfValuesHeaders:
    accept_language: Optional[list[str]] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPublicListOfValuesRequest:
    headers: GetPublicListOfValuesHeaders = dataclasses.field()
    path_params: GetPublicListOfValuesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPublicListOfValuesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    public_list_of_values_response: Optional[shared_publiclistofvaluesresponse.PublicListOfValuesResponse] = dataclasses.field(default=None)
    

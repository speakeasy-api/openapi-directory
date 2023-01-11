import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import automatictransitioninfolist as shared_automatictransitioninfolist


@dataclasses.dataclass
class GetAutomaticTransitionsQueryParams:
    store_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAutomaticTransitionsHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutomaticTransitionsRequest:
    headers: GetAutomaticTransitionsHeaders = dataclasses.field()
    query_params: GetAutomaticTransitionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAutomaticTransitionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    automatic_transition_info_list: Optional[shared_automatictransitioninfolist.AutomaticTransitionInfoList] = dataclasses.field(default=None)
    

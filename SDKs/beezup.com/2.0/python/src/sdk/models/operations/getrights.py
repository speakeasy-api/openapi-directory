import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import functionalityrightinfo as shared_functionalityrightinfo


@dataclasses.dataclass
class GetRightsPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRightsRequest:
    path_params: GetRightsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRightsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    functionality_right_infos: Optional[list[shared_functionalityrightinfo.FunctionalityRightInfo]] = dataclasses.field(default=None)
    

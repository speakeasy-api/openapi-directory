import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import importationsresponse as shared_importationsresponse


@dataclasses.dataclass
class ImportationGetReportingsPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImportationGetReportingsRequest:
    path_params: ImportationGetReportingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportationGetReportingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    importations_response: Optional[shared_importationsresponse.ImportationsResponse] = dataclasses.field(default=None)
    

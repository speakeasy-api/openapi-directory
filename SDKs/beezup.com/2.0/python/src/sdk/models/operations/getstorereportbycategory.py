import dataclasses
from typing import Optional
from ..shared import reportbycategoryrequest as shared_reportbycategoryrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import reportbycategoryresponse as shared_reportbycategoryresponse


@dataclasses.dataclass
class GetStoreReportByCategoryPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreReportByCategoryRequest:
    path_params: GetStoreReportByCategoryPathParams = dataclasses.field()
    request: shared_reportbycategoryrequest.ReportByCategoryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetStoreReportByCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    report_by_category_response: Optional[shared_reportbycategoryresponse.ReportByCategoryResponse] = dataclasses.field(default=None)
    

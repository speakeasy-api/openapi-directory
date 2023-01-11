import dataclasses
from typing import Optional
from ..shared import reportbyproductrequest as shared_reportbyproductrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import reportbyproductresponse as shared_reportbyproductresponse


@dataclasses.dataclass
class GetStoreReportByProductPathParams:
    store_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'storeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStoreReportByProductRequest:
    path_params: GetStoreReportByProductPathParams = dataclasses.field()
    request: shared_reportbyproductrequest.ReportByProductRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetStoreReportByProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    report_by_product_response: Optional[shared_reportbyproductresponse.ReportByProductResponse] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import reportbydayrequest as shared_reportbydayrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import reportbydayresponse as shared_reportbydayresponse


@dataclasses.dataclass
class GetStoreReportByDayPerStoreRequest:
    request: shared_reportbydayrequest.ReportByDayRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetStoreReportByDayPerStoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    report_by_day_per_store_response: Optional[dict[str, shared_reportbydayresponse.ReportByDayResponse]] = dataclasses.field(default=None)
    

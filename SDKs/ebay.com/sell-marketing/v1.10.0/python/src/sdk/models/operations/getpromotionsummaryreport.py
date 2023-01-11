import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import summaryreportresponse as shared_summaryreportresponse


@dataclasses.dataclass
class GetPromotionSummaryReportQueryParams:
    marketplace_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPromotionSummaryReportSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPromotionSummaryReportRequest:
    query_params: GetPromotionSummaryReportQueryParams = dataclasses.field()
    security: GetPromotionSummaryReportSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPromotionSummaryReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    summary_report_response: Optional[shared_summaryreportresponse.SummaryReportResponse] = dataclasses.field(default=None)
    

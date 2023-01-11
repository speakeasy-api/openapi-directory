import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import payoutsummaryresponse as shared_payoutsummaryresponse


@dataclasses.dataclass
class GetPayoutSummaryQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayoutSummarySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPayoutSummaryRequest:
    query_params: GetPayoutSummaryQueryParams = dataclasses.field()
    security: GetPayoutSummarySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPayoutSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payout_summary_response: Optional[shared_payoutsummaryresponse.PayoutSummaryResponse] = dataclasses.field(default=None)
    

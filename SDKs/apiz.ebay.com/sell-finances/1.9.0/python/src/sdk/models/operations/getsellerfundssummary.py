import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sellerfundssummaryresponse as shared_sellerfundssummaryresponse


@dataclasses.dataclass
class GetSellerFundsSummarySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSellerFundsSummaryRequest:
    security: GetSellerFundsSummarySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSellerFundsSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    seller_funds_summary_response: Optional[shared_sellerfundssummaryresponse.SellerFundsSummaryResponse] = dataclasses.field(default=None)
    

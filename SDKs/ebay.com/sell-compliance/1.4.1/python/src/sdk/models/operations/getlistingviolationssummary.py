import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import compliancesummary as shared_compliancesummary


@dataclasses.dataclass
class GetListingViolationsSummaryQueryParams:
    compliance_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'compliance_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingViolationsSummaryHeaders:
    x_ebay_c_marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingViolationsSummarySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetListingViolationsSummaryRequest:
    headers: GetListingViolationsSummaryHeaders = dataclasses.field()
    query_params: GetListingViolationsSummaryQueryParams = dataclasses.field()
    security: GetListingViolationsSummarySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListingViolationsSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    compliance_summary: Optional[shared_compliancesummary.ComplianceSummary] = dataclasses.field(default=None)
    

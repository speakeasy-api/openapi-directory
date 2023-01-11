import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pagedcomplianceviolationcollection as shared_pagedcomplianceviolationcollection


@dataclasses.dataclass
class GetListingViolationsQueryParams:
    compliance_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'compliance_type', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    listing_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'listing_id', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingViolationsHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingViolationsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetListingViolationsRequest:
    headers: GetListingViolationsHeaders = dataclasses.field()
    query_params: GetListingViolationsQueryParams = dataclasses.field()
    security: GetListingViolationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListingViolationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paged_compliance_violation_collection: Optional[shared_pagedcomplianceviolationcollection.PagedComplianceViolationCollection] = dataclasses.field(default=None)
    

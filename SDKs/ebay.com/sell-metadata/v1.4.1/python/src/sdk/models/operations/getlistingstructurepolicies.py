import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import listingstructurepolicyresponse as shared_listingstructurepolicyresponse


@dataclasses.dataclass
class GetListingStructurePoliciesPathParams:
    marketplace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListingStructurePoliciesQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListingStructurePoliciesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetListingStructurePoliciesRequest:
    path_params: GetListingStructurePoliciesPathParams = dataclasses.field()
    query_params: GetListingStructurePoliciesQueryParams = dataclasses.field()
    security: GetListingStructurePoliciesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetListingStructurePoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    listing_structure_policy_response: Optional[shared_listingstructurepolicyresponse.ListingStructurePolicyResponse] = dataclasses.field(default=None)
    

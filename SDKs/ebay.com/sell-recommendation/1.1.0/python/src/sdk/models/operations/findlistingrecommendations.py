import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import findlistingrecommendationrequest as shared_findlistingrecommendationrequest
from ..shared import pagedlistingrecommendationcollection as shared_pagedlistingrecommendationcollection


@dataclasses.dataclass
class FindListingRecommendationsQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FindListingRecommendationsHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindListingRecommendationsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FindListingRecommendationsRequest:
    headers: FindListingRecommendationsHeaders = dataclasses.field()
    query_params: FindListingRecommendationsQueryParams = dataclasses.field()
    security: FindListingRecommendationsSecurity = dataclasses.field()
    request: Optional[shared_findlistingrecommendationrequest.FindListingRecommendationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FindListingRecommendationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paged_listing_recommendation_collection: Optional[shared_pagedlistingrecommendationcollection.PagedListingRecommendationCollection] = dataclasses.field(default=None)
    

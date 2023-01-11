import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import adpagedcollection as shared_adpagedcollection


@dataclasses.dataclass
class GetAdsPathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAdsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    listing_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'listing_ids', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAdsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAdsRequest:
    path_params: GetAdsPathParams = dataclasses.field()
    query_params: GetAdsQueryParams = dataclasses.field()
    security: GetAdsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAdsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ad_paged_collection: Optional[shared_adpagedcollection.AdPagedCollection] = dataclasses.field(default=None)
    

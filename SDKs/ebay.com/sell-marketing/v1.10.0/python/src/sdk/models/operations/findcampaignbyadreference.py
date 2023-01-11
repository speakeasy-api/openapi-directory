import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import campaigns as shared_campaigns


@dataclasses.dataclass
class FindCampaignByAdReferenceQueryParams:
    inventory_reference_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inventory_reference_id', 'style': 'form', 'explode': True }})
    inventory_reference_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inventory_reference_type', 'style': 'form', 'explode': True }})
    listing_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'listing_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FindCampaignByAdReferenceSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FindCampaignByAdReferenceRequest:
    query_params: FindCampaignByAdReferenceQueryParams = dataclasses.field()
    security: FindCampaignByAdReferenceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindCampaignByAdReferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    campaigns: Optional[shared_campaigns.Campaigns] = dataclasses.field(default=None)
    

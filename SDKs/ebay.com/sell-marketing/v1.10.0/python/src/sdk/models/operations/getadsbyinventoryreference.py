import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ads as shared_ads


@dataclasses.dataclass
class GetAdsByInventoryReferencePathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAdsByInventoryReferenceQueryParams:
    inventory_reference_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'inventory_reference_id', 'style': 'form', 'explode': True }})
    inventory_reference_type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'inventory_reference_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAdsByInventoryReferenceSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAdsByInventoryReferenceRequest:
    path_params: GetAdsByInventoryReferencePathParams = dataclasses.field()
    query_params: GetAdsByInventoryReferenceQueryParams = dataclasses.field()
    security: GetAdsByInventoryReferenceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAdsByInventoryReferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ads: Optional[shared_ads.Ads] = dataclasses.field(default=None)
    

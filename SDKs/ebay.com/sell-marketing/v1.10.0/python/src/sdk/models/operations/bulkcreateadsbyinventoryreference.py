import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkcreateadsbyinventoryreferencerequest as shared_bulkcreateadsbyinventoryreferencerequest
from ..shared import bulkcreateadsbyinventoryreferenceresponse as shared_bulkcreateadsbyinventoryreferenceresponse


@dataclasses.dataclass
class BulkCreateAdsByInventoryReferencePathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BulkCreateAdsByInventoryReferenceSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BulkCreateAdsByInventoryReferenceRequest:
    path_params: BulkCreateAdsByInventoryReferencePathParams = dataclasses.field()
    request: shared_bulkcreateadsbyinventoryreferencerequest.BulkCreateAdsByInventoryReferenceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkCreateAdsByInventoryReferenceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BulkCreateAdsByInventoryReferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_create_ads_by_inventory_reference_response: Optional[shared_bulkcreateadsbyinventoryreferenceresponse.BulkCreateAdsByInventoryReferenceResponse] = dataclasses.field(default=None)
    

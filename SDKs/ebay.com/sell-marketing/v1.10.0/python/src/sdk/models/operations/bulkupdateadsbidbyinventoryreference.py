import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkcreateadsbyinventoryreferencerequest as shared_bulkcreateadsbyinventoryreferencerequest
from ..shared import bulkcreateadsbyinventoryreferenceresponse as shared_bulkcreateadsbyinventoryreferenceresponse


@dataclasses.dataclass
class BulkUpdateAdsBidByInventoryReferencePathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BulkUpdateAdsBidByInventoryReferenceSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BulkUpdateAdsBidByInventoryReferenceRequest:
    path_params: BulkUpdateAdsBidByInventoryReferencePathParams = dataclasses.field()
    request: shared_bulkcreateadsbyinventoryreferencerequest.BulkCreateAdsByInventoryReferenceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkUpdateAdsBidByInventoryReferenceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BulkUpdateAdsBidByInventoryReferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_create_ads_by_inventory_reference_response: Optional[shared_bulkcreateadsbyinventoryreferenceresponse.BulkCreateAdsByInventoryReferenceResponse] = dataclasses.field(default=None)
    

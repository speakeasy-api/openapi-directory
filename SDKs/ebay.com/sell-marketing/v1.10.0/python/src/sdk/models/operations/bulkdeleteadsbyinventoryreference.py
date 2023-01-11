import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkdeleteadsbyinventoryreferencerequest as shared_bulkdeleteadsbyinventoryreferencerequest
from ..shared import bulkdeleteadsbyinventoryreferenceresponse as shared_bulkdeleteadsbyinventoryreferenceresponse


@dataclasses.dataclass
class BulkDeleteAdsByInventoryReferencePathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BulkDeleteAdsByInventoryReferenceSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class BulkDeleteAdsByInventoryReferenceRequest:
    path_params: BulkDeleteAdsByInventoryReferencePathParams = dataclasses.field()
    request: shared_bulkdeleteadsbyinventoryreferencerequest.BulkDeleteAdsByInventoryReferenceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: BulkDeleteAdsByInventoryReferenceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class BulkDeleteAdsByInventoryReferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_delete_ads_by_inventory_reference_response: Optional[shared_bulkdeleteadsbyinventoryreferenceresponse.BulkDeleteAdsByInventoryReferenceResponse] = dataclasses.field(default=None)
    

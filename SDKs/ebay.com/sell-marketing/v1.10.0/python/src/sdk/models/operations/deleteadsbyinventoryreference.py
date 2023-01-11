import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deleteadsbyinventoryreferencerequest as shared_deleteadsbyinventoryreferencerequest
from ..shared import adids as shared_adids


@dataclasses.dataclass
class DeleteAdsByInventoryReferencePathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAdsByInventoryReferenceSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteAdsByInventoryReferenceRequest:
    path_params: DeleteAdsByInventoryReferencePathParams = dataclasses.field()
    request: shared_deleteadsbyinventoryreferencerequest.DeleteAdsByInventoryReferenceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: DeleteAdsByInventoryReferenceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAdsByInventoryReferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ad_ids: Optional[shared_adids.AdIds] = dataclasses.field(default=None)
    

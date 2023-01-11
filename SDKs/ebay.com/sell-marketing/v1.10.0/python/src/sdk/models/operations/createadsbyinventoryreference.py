import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import createadsbyinventoryreferencerequest as shared_createadsbyinventoryreferencerequest
from ..shared import adreferences as shared_adreferences


@dataclasses.dataclass
class CreateAdsByInventoryReferencePathParams:
    campaign_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAdsByInventoryReferenceSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateAdsByInventoryReferenceRequest:
    path_params: CreateAdsByInventoryReferencePathParams = dataclasses.field()
    request: shared_createadsbyinventoryreferencerequest.CreateAdsByInventoryReferenceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAdsByInventoryReferenceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAdsByInventoryReferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ad_references: Optional[shared_adreferences.AdReferences] = dataclasses.field(default=None)
    

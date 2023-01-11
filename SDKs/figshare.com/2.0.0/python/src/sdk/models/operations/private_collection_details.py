import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectioncomplete as shared_collectioncomplete


@dataclasses.dataclass
class PrivateCollectionDetailsPathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionDetailsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionDetailsRequest:
    path_params: PrivateCollectionDetailsPathParams = dataclasses.field()
    security: PrivateCollectionDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_complete: Optional[shared_collectioncomplete.CollectionComplete] = dataclasses.field(default=None)
    

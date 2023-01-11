import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectionhandle as shared_collectionhandle
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionReserveHandlePathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionReserveHandleSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionReserveHandleRequest:
    path_params: PrivateCollectionReserveHandlePathParams = dataclasses.field()
    security: PrivateCollectionReserveHandleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionReserveHandleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_handle: Optional[shared_collectionhandle.CollectionHandle] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectiondoi as shared_collectiondoi
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionReserveDoiPathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionReserveDoiSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionReserveDoiRequest:
    path_params: PrivateCollectionReserveDoiPathParams = dataclasses.field()
    security: PrivateCollectionReserveDoiSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionReserveDoiResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_doi: Optional[shared_collectiondoi.CollectionDoi] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    

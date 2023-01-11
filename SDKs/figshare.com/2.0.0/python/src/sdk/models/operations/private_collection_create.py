import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectioncreate as shared_collectioncreate
from ..shared import collectioncomplete as shared_collectioncomplete
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionCreateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionCreateRequest:
    request: shared_collectioncreate.CollectionCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateCollectionCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_complete: Optional[shared_collectioncomplete.CollectionComplete] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    

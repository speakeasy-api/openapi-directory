import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import privatecollectionsearch as shared_privatecollectionsearch
from ..shared import collection as shared_collection
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionsSearchSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionsSearchRequest:
    request: shared_privatecollectionsearch.PrivateCollectionSearch = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateCollectionsSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collections: Optional[list[shared_collection.Collection]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    

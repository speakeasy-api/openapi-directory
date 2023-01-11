import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectioncreation as shared_collectioncreation
from ..shared import collection as shared_collection
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class CreateCollectionSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateCollectionRequest:
    request: shared_collectioncreation.CollectionCreation = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection: Optional[shared_collection.Collection] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    

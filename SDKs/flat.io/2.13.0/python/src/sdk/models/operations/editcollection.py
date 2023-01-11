import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectionmodification as shared_collectionmodification
from ..shared import collection as shared_collection
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class EditCollectionPathParams:
    collection: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditCollectionSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditCollectionRequest:
    path_params: EditCollectionPathParams = dataclasses.field()
    security: EditCollectionSecurity = dataclasses.field()
    request: Optional[shared_collectionmodification.CollectionModification] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection: Optional[shared_collection.Collection] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import collection as shared_collection
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class GetCollectionPathParams:
    collection: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCollectionQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCollectionSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCollectionRequest:
    path_params: GetCollectionPathParams = dataclasses.field()
    query_params: GetCollectionQueryParams = dataclasses.field()
    security: GetCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection: Optional[shared_collection.Collection] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    

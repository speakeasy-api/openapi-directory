import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class DeleteScoreFromCollectionPathParams:
    collection: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection', 'style': 'simple', 'explode': False }})
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteScoreFromCollectionQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteScoreFromCollectionSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteScoreFromCollectionRequest:
    path_params: DeleteScoreFromCollectionPathParams = dataclasses.field()
    query_params: DeleteScoreFromCollectionQueryParams = dataclasses.field()
    security: DeleteScoreFromCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteScoreFromCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    

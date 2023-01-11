import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class DeleteScorePathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteScoreQueryParams:
    now: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'now', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteScoreSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteScoreRequest:
    path_params: DeleteScorePathParams = dataclasses.field()
    query_params: DeleteScoreQueryParams = dataclasses.field()
    security: DeleteScoreSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class UntrashScorePathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UntrashScoreSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UntrashScoreRequest:
    path_params: UntrashScorePathParams = dataclasses.field()
    security: UntrashScoreSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UntrashScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    

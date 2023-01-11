import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoredetails as shared_scoredetails


@dataclasses.dataclass
class GetUserScoresPathParams:
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserScoresQueryParams:
    parent: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserScoresSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserScoresRequest:
    path_params: GetUserScoresPathParams = dataclasses.field()
    query_params: GetUserScoresQueryParams = dataclasses.field()
    security: GetUserScoresSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserScoresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_details: Optional[list[shared_scoredetails.ScoreDetails]] = dataclasses.field(default=None)
    

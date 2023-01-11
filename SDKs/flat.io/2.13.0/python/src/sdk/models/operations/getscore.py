import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoredetails as shared_scoredetails


@dataclasses.dataclass
class GetScorePathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScoreQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScoreSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScoreRequest:
    path_params: GetScorePathParams = dataclasses.field()
    query_params: GetScoreQueryParams = dataclasses.field()
    security: GetScoreSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_details: Optional[shared_scoredetails.ScoreDetails] = dataclasses.field(default=None)
    

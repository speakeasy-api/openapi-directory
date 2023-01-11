import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scorefork as shared_scorefork
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoredetails as shared_scoredetails


@dataclasses.dataclass
class ForkScorePathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ForkScoreQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ForkScoreSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ForkScoreRequest:
    path_params: ForkScorePathParams = dataclasses.field()
    query_params: ForkScoreQueryParams = dataclasses.field()
    request: shared_scorefork.ScoreFork = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: ForkScoreSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ForkScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_details: Optional[shared_scoredetails.ScoreDetails] = dataclasses.field(default=None)
    

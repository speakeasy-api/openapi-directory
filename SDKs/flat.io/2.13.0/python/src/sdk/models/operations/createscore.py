import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scorecreation as shared_scorecreation
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoredetails as shared_scoredetails


@dataclasses.dataclass
class CreateScoreSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateScoreRequest:
    request: shared_scorecreation.ScoreCreation = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateScoreSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_details: Optional[shared_scoredetails.ScoreDetails] = dataclasses.field(default=None)
    

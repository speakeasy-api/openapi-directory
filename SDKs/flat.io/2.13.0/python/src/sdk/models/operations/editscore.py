import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scoremodification as shared_scoremodification
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoredetails as shared_scoredetails


@dataclasses.dataclass
class EditScorePathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditScoreSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EditScoreRequest:
    path_params: EditScorePathParams = dataclasses.field()
    security: EditScoreSecurity = dataclasses.field()
    request: Optional[shared_scoremodification.ScoreModification] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_details: Optional[shared_scoredetails.ScoreDetails] = dataclasses.field(default=None)
    

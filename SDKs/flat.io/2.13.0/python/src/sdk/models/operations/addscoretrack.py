import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scoretrackcreation as shared_scoretrackcreation
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoretrack as shared_scoretrack


@dataclasses.dataclass
class AddScoreTrackPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddScoreTrackSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddScoreTrackRequest:
    path_params: AddScoreTrackPathParams = dataclasses.field()
    request: shared_scoretrackcreation.ScoreTrackCreation = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddScoreTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddScoreTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_track: Optional[shared_scoretrack.ScoreTrack] = dataclasses.field(default=None)
    

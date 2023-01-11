import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoretrack as shared_scoretrack


@dataclasses.dataclass
class GetScoreTrackPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    track: str = dataclasses.field(metadata={'path_param': { 'field_name': 'track', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScoreTrackQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScoreTrackSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScoreTrackRequest:
    path_params: GetScoreTrackPathParams = dataclasses.field()
    query_params: GetScoreTrackQueryParams = dataclasses.field()
    security: GetScoreTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScoreTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_track: Optional[shared_scoretrack.ScoreTrack] = dataclasses.field(default=None)
    

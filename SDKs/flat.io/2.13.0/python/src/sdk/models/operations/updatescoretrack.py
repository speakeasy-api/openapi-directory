import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import scoretrackupdate as shared_scoretrackupdate
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoretrack as shared_scoretrack


@dataclasses.dataclass
class UpdateScoreTrackPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    track: str = dataclasses.field(metadata={'path_param': { 'field_name': 'track', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateScoreTrackSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateScoreTrackRequest:
    path_params: UpdateScoreTrackPathParams = dataclasses.field()
    request: shared_scoretrackupdate.ScoreTrackUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateScoreTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateScoreTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_track: Optional[shared_scoretrack.ScoreTrack] = dataclasses.field(default=None)
    

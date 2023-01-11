import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scoretrack as shared_scoretrack


@dataclasses.dataclass
class ListScoreTracksPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListScoreTracksQueryParams:
    assignment: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignment', 'style': 'form', 'explode': True }})
    list_auto_track: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'listAutoTrack', 'style': 'form', 'explode': True }})
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListScoreTracksSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListScoreTracksRequest:
    path_params: ListScoreTracksPathParams = dataclasses.field()
    query_params: ListScoreTracksQueryParams = dataclasses.field()
    security: ListScoreTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListScoreTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_tracks: Optional[list[shared_scoretrack.ScoreTrack]] = dataclasses.field(default=None)
    

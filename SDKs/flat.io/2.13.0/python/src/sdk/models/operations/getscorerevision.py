import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scorerevision as shared_scorerevision


@dataclasses.dataclass
class GetScoreRevisionPathParams:
    revision: str = dataclasses.field(metadata={'path_param': { 'field_name': 'revision', 'style': 'simple', 'explode': False }})
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScoreRevisionQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScoreRevisionSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScoreRevisionRequest:
    path_params: GetScoreRevisionPathParams = dataclasses.field()
    query_params: GetScoreRevisionQueryParams = dataclasses.field()
    security: GetScoreRevisionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScoreRevisionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_revision: Optional[shared_scorerevision.ScoreRevision] = dataclasses.field(default=None)
    

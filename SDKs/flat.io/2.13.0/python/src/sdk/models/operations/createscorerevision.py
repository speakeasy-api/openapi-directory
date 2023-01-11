import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import scorerevisioncreation as shared_scorerevisioncreation
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scorerevision as shared_scorerevision


@dataclasses.dataclass
class CreateScoreRevisionPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateScoreRevisionSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateScoreRevisionRequest:
    path_params: CreateScoreRevisionPathParams = dataclasses.field()
    request: shared_scorerevisioncreation.ScoreRevisionCreation = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateScoreRevisionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateScoreRevisionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_revision: Optional[shared_scorerevision.ScoreRevision] = dataclasses.field(default=None)
    

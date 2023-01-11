import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import scorerevision as shared_scorerevision


@dataclasses.dataclass
class GetScoreRevisionsPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScoreRevisionsQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScoreRevisionsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScoreRevisionsRequest:
    path_params: GetScoreRevisionsPathParams = dataclasses.field()
    query_params: GetScoreRevisionsQueryParams = dataclasses.field()
    security: GetScoreRevisionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScoreRevisionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    score_revisions: Optional[list[shared_scorerevision.ScoreRevision]] = dataclasses.field(default=None)
    

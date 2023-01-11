import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class RemoveScoreCollaboratorPathParams:
    collaborator: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collaborator', 'style': 'simple', 'explode': False }})
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveScoreCollaboratorSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RemoveScoreCollaboratorRequest:
    path_params: RemoveScoreCollaboratorPathParams = dataclasses.field()
    security: RemoveScoreCollaboratorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveScoreCollaboratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    

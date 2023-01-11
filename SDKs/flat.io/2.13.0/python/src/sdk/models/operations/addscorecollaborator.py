import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import resourcecollaboratorcreation as shared_resourcecollaboratorcreation
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import resourcecollaborator as shared_resourcecollaborator


@dataclasses.dataclass
class AddScoreCollaboratorPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddScoreCollaboratorSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddScoreCollaboratorRequest:
    path_params: AddScoreCollaboratorPathParams = dataclasses.field()
    request: shared_resourcecollaboratorcreation.ResourceCollaboratorCreation = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddScoreCollaboratorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddScoreCollaboratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    resource_collaborator: Optional[shared_resourcecollaborator.ResourceCollaborator] = dataclasses.field(default=None)
    

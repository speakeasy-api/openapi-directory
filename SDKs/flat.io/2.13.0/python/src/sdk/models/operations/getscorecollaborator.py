import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import resourcecollaborator as shared_resourcecollaborator


@dataclasses.dataclass
class GetScoreCollaboratorPathParams:
    collaborator: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collaborator', 'style': 'simple', 'explode': False }})
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScoreCollaboratorQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScoreCollaboratorSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScoreCollaboratorRequest:
    path_params: GetScoreCollaboratorPathParams = dataclasses.field()
    query_params: GetScoreCollaboratorQueryParams = dataclasses.field()
    security: GetScoreCollaboratorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScoreCollaboratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    resource_collaborator: Optional[shared_resourcecollaborator.ResourceCollaborator] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import resourcecollaborator as shared_resourcecollaborator


@dataclasses.dataclass
class GetScoreCollaboratorsPathParams:
    score: str = dataclasses.field(metadata={'path_param': { 'field_name': 'score', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetScoreCollaboratorsQueryParams:
    sharing_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sharingKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetScoreCollaboratorsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetScoreCollaboratorsRequest:
    path_params: GetScoreCollaboratorsPathParams = dataclasses.field()
    query_params: GetScoreCollaboratorsQueryParams = dataclasses.field()
    security: GetScoreCollaboratorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetScoreCollaboratorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    resource_collaborators: Optional[list[shared_resourcecollaborator.ResourceCollaborator]] = dataclasses.field(default=None)
    

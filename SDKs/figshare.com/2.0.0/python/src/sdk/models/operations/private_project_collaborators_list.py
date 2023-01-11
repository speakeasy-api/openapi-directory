import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import projectcollaborator as shared_projectcollaborator


@dataclasses.dataclass
class PrivateProjectCollaboratorsListPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateProjectCollaboratorsListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectCollaboratorsListRequest:
    path_params: PrivateProjectCollaboratorsListPathParams = dataclasses.field()
    security: PrivateProjectCollaboratorsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectCollaboratorsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    project_collaborators: Optional[list[shared_projectcollaborator.ProjectCollaborator]] = dataclasses.field(default=None)
    

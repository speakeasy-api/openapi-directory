import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import projectcollaboratorinvite as shared_projectcollaboratorinvite
from ..shared import errormessage as shared_errormessage
from ..shared import responsemessage as shared_responsemessage


@dataclasses.dataclass
class PrivateProjectCollaboratorsInvitePathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateProjectCollaboratorsInviteSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectCollaboratorsInviteRequest:
    path_params: PrivateProjectCollaboratorsInvitePathParams = dataclasses.field()
    request: shared_projectcollaboratorinvite.ProjectCollaboratorInvite = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateProjectCollaboratorsInviteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectCollaboratorsInviteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    response_message: Optional[shared_responsemessage.ResponseMessage] = dataclasses.field(default=None)
    

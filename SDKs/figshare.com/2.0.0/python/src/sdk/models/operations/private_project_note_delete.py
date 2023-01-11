import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateProjectNoteDeletePathParams:
    note_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'note_id', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateProjectNoteDeleteSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectNoteDeleteRequest:
    path_params: PrivateProjectNoteDeletePathParams = dataclasses.field()
    security: PrivateProjectNoteDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectNoteDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    

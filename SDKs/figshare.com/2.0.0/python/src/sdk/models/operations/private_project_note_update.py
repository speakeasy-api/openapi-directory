import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import projectnotecreate as shared_projectnotecreate
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateProjectNoteUpdatePathParams:
    note_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'note_id', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateProjectNoteUpdateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectNoteUpdateRequest:
    path_params: PrivateProjectNoteUpdatePathParams = dataclasses.field()
    request: shared_projectnotecreate.ProjectNoteCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateProjectNoteUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectNoteUpdateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    

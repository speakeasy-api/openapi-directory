import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import reminderprofile as shared_reminderprofile


@dataclasses.dataclass
class ReminderProfilesCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReminderProfilesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReminderProfilesCreateRequest:
    query_params: ReminderProfilesCreateQueryParams = dataclasses.field()
    security: ReminderProfilesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReminderProfilesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reminder_profile: Optional[shared_reminderprofile.ReminderProfile] = dataclasses.field(default=None)
    

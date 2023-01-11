import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import reminderprofile as shared_reminderprofile


@dataclasses.dataclass
class ReminderProfilesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReminderProfilesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ReminderProfilesList200ApplicationJSON:
    r"""ReminderProfilesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_reminderprofile.ReminderProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class ReminderProfilesListRequest:
    query_params: ReminderProfilesListQueryParams = dataclasses.field()
    security: ReminderProfilesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReminderProfilesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reminder_profiles_list_200_application_json_object: Optional[ReminderProfilesList200ApplicationJSON] = dataclasses.field(default=None)
    

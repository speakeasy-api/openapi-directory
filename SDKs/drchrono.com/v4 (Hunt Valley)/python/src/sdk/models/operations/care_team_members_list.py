import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import careteammember as shared_careteammember


@dataclasses.dataclass
class CareTeamMembersListQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CareTeamMembersListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class CareTeamMembersList200ApplicationJSON:
    r"""CareTeamMembersList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_careteammember.CareTeamMember]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class CareTeamMembersListRequest:
    query_params: CareTeamMembersListQueryParams = dataclasses.field()
    security: CareTeamMembersListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CareTeamMembersListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    care_team_members_list_200_application_json_object: Optional[CareTeamMembersList200ApplicationJSON] = dataclasses.field(default=None)
    

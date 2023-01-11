import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import careteammember as shared_careteammember


@dataclasses.dataclass
class CareTeamMembersReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CareTeamMembersReadQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CareTeamMembersReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CareTeamMembersReadRequest:
    path_params: CareTeamMembersReadPathParams = dataclasses.field()
    query_params: CareTeamMembersReadQueryParams = dataclasses.field()
    security: CareTeamMembersReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CareTeamMembersReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    care_team_member: Optional[shared_careteammember.CareTeamMember] = dataclasses.field(default=None)
    

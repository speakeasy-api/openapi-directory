import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ReminderProfilesDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReminderProfilesDeleteQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReminderProfilesDeleteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReminderProfilesDeleteRequest:
    path_params: ReminderProfilesDeletePathParams = dataclasses.field()
    query_params: ReminderProfilesDeleteQueryParams = dataclasses.field()
    security: ReminderProfilesDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReminderProfilesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

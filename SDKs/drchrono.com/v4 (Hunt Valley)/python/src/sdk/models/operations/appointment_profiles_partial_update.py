import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class AppointmentProfilesPartialUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppointmentProfilesPartialUpdateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentProfilesPartialUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentProfilesPartialUpdateRequest:
    path_params: AppointmentProfilesPartialUpdatePathParams = dataclasses.field()
    query_params: AppointmentProfilesPartialUpdateQueryParams = dataclasses.field()
    security: AppointmentProfilesPartialUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentProfilesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

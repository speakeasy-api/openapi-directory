import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class AppointmentProfilesUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppointmentProfilesUpdateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentProfilesUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentProfilesUpdateRequest:
    path_params: AppointmentProfilesUpdatePathParams = dataclasses.field()
    query_params: AppointmentProfilesUpdateQueryParams = dataclasses.field()
    security: AppointmentProfilesUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentProfilesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

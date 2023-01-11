import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class AppointmentTemplatesPartialUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppointmentTemplatesPartialUpdateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    office: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    profile: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'profile', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentTemplatesPartialUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentTemplatesPartialUpdateRequest:
    path_params: AppointmentTemplatesPartialUpdatePathParams = dataclasses.field()
    query_params: AppointmentTemplatesPartialUpdateQueryParams = dataclasses.field()
    security: AppointmentTemplatesPartialUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentTemplatesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

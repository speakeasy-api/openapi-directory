import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class AppointmentTemplatesDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppointmentTemplatesDeleteQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    office: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    profile: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'profile', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AppointmentTemplatesDeleteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AppointmentTemplatesDeleteRequest:
    path_params: AppointmentTemplatesDeletePathParams = dataclasses.field()
    query_params: AppointmentTemplatesDeleteQueryParams = dataclasses.field()
    security: AppointmentTemplatesDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AppointmentTemplatesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

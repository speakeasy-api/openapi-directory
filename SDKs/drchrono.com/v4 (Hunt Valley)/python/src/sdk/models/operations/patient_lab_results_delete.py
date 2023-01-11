import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PatientLabResultsDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientLabResultsDeleteQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    ordering_doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering_doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientLabResultsDeleteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientLabResultsDeleteRequest:
    path_params: PatientLabResultsDeletePathParams = dataclasses.field()
    query_params: PatientLabResultsDeleteQueryParams = dataclasses.field()
    security: PatientLabResultsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientLabResultsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    

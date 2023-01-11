import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patientlabresultset as shared_patientlabresultset


@dataclasses.dataclass
class PatientLabResultsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientLabResultsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    ordering_doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering_doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientLabResultsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientLabResultsReadRequest:
    path_params: PatientLabResultsReadPathParams = dataclasses.field()
    query_params: PatientLabResultsReadQueryParams = dataclasses.field()
    security: PatientLabResultsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientLabResultsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_lab_result_set: Optional[shared_patientlabresultset.PatientLabResultSet] = dataclasses.field(default=None)
    

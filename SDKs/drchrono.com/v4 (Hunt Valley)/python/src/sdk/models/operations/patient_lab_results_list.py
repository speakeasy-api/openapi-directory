import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import patientlabresultset as shared_patientlabresultset


@dataclasses.dataclass
class PatientLabResultsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    ordering_doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering_doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientLabResultsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PatientLabResultsList200ApplicationJSON:
    r"""PatientLabResultsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_patientlabresultset.PatientLabResultSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class PatientLabResultsListRequest:
    query_params: PatientLabResultsListQueryParams = dataclasses.field()
    security: PatientLabResultsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientLabResultsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_lab_results_list_200_application_json_object: Optional[PatientLabResultsList200ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import patientphysicalexam as shared_patientphysicalexam


@dataclasses.dataclass
class PatientPhysicalExamsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientPhysicalExamsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PatientPhysicalExamsList200ApplicationJSON:
    r"""PatientPhysicalExamsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_patientphysicalexam.PatientPhysicalExam]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class PatientPhysicalExamsListRequest:
    query_params: PatientPhysicalExamsListQueryParams = dataclasses.field()
    security: PatientPhysicalExamsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientPhysicalExamsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_physical_exams_list_200_application_json_object: Optional[PatientPhysicalExamsList200ApplicationJSON] = dataclasses.field(default=None)
    

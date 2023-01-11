import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import patientmessage as shared_patientmessage


@dataclasses.dataclass
class PatientMessagesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientMessagesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PatientMessagesList200ApplicationJSON:
    r"""PatientMessagesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_patientmessage.PatientMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class PatientMessagesListRequest:
    query_params: PatientMessagesListQueryParams = dataclasses.field()
    security: PatientMessagesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientMessagesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_messages_list_200_application_json_object: Optional[PatientMessagesList200ApplicationJSON] = dataclasses.field(default=None)
    

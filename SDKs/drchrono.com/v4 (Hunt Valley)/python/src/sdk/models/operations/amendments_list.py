import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import patientamendment as shared_patientamendment


@dataclasses.dataclass
class AmendmentsListQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AmendmentsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class AmendmentsList200ApplicationJSON:
    r"""AmendmentsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_patientamendment.PatientAmendment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class AmendmentsListRequest:
    query_params: AmendmentsListQueryParams = dataclasses.field()
    security: AmendmentsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AmendmentsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    amendments_list_200_application_json_object: Optional[AmendmentsList200ApplicationJSON] = dataclasses.field(default=None)
    

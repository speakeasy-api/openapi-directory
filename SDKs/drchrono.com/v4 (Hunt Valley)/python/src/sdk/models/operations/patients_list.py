import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import patient as shared_patient


@dataclasses.dataclass
class PatientsListQueryParams:
    chart_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'chart_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    date_of_birth: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_of_birth', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    ethnicity: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ethnicity', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_name', 'style': 'form', 'explode': True }})
    gender: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gender', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_name', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    preferred_language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'preferred_language', 'style': 'form', 'explode': True }})
    race: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'race', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PatientsList200ApplicationJSON:
    r"""PatientsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_patient.Patient]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class PatientsListRequest:
    query_params: PatientsListQueryParams = dataclasses.field()
    security: PatientsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patients_list_200_application_json_object: Optional[PatientsList200ApplicationJSON] = dataclasses.field(default=None)
    

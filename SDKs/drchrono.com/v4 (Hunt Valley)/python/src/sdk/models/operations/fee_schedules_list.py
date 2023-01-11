import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import doctorfeeschedule as shared_doctorfeeschedule


@dataclasses.dataclass
class FeeSchedulesListQueryParams:
    code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    code_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'code_type', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    payer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payer_id', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FeeSchedulesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class FeeSchedulesList200ApplicationJSON:
    r"""FeeSchedulesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_doctorfeeschedule.DoctorFeeSchedule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class FeeSchedulesListRequest:
    query_params: FeeSchedulesListQueryParams = dataclasses.field()
    security: FeeSchedulesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FeeSchedulesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fee_schedules_list_200_application_json_object: Optional[FeeSchedulesList200ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import doctorfeeschedule as shared_doctorfeeschedule


@dataclasses.dataclass
class FeeSchedulesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FeeSchedulesReadQueryParams:
    code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    code_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'code_type', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    payer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payer_id', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FeeSchedulesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FeeSchedulesReadRequest:
    path_params: FeeSchedulesReadPathParams = dataclasses.field()
    query_params: FeeSchedulesReadQueryParams = dataclasses.field()
    security: FeeSchedulesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FeeSchedulesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    doctor_fee_schedule: Optional[shared_doctorfeeschedule.DoctorFeeSchedule] = dataclasses.field(default=None)
    

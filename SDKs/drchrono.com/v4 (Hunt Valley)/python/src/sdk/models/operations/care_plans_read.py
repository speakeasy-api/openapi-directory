import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import careplan as shared_careplan


@dataclasses.dataclass
class CarePlansReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CarePlansReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    plan_type: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'plan_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CarePlansReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CarePlansReadRequest:
    path_params: CarePlansReadPathParams = dataclasses.field()
    query_params: CarePlansReadQueryParams = dataclasses.field()
    security: CarePlansReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CarePlansReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    care_plan: Optional[shared_careplan.CarePlan] = dataclasses.field(default=None)
    

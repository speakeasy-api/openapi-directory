import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import cashpayment as shared_cashpayment


@dataclasses.dataclass
class PatientPaymentsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientPaymentsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientPaymentsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientPaymentsReadRequest:
    path_params: PatientPaymentsReadPathParams = dataclasses.field()
    query_params: PatientPaymentsReadQueryParams = dataclasses.field()
    security: PatientPaymentsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientPaymentsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cash_payment: Optional[shared_cashpayment.CashPayment] = dataclasses.field(default=None)
    

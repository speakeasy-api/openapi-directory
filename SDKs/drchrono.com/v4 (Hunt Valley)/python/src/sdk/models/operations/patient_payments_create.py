import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import cashpayment as shared_cashpayment


@dataclasses.dataclass
class PatientPaymentsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientPaymentsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientPaymentsCreateRequest:
    query_params: PatientPaymentsCreateQueryParams = dataclasses.field()
    security: PatientPaymentsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientPaymentsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cash_payment: Optional[shared_cashpayment.CashPayment] = dataclasses.field(default=None)
    

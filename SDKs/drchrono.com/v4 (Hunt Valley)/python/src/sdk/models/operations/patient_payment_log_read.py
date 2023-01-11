import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import cashpaymentlog as shared_cashpaymentlog


@dataclasses.dataclass
class PatientPaymentLogReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientPaymentLogReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    office: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientPaymentLogReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientPaymentLogReadRequest:
    path_params: PatientPaymentLogReadPathParams = dataclasses.field()
    query_params: PatientPaymentLogReadQueryParams = dataclasses.field()
    security: PatientPaymentLogReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientPaymentLogReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cash_payment_log: Optional[shared_cashpaymentlog.CashPaymentLog] = dataclasses.field(default=None)
    

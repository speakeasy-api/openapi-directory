import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import paymentsprogramresponse as shared_paymentsprogramresponse


@dataclasses.dataclass
class GetPaymentsProgramPathParams:
    marketplace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    payments_program_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payments_program_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentsProgramSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPaymentsProgramRequest:
    path_params: GetPaymentsProgramPathParams = dataclasses.field()
    security: GetPaymentsProgramSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentsProgramResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payments_program_response: Optional[shared_paymentsprogramresponse.PaymentsProgramResponse] = dataclasses.field(default=None)
    

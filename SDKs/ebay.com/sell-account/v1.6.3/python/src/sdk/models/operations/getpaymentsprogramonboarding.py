import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import paymentsprogramonboardingresponse as shared_paymentsprogramonboardingresponse


@dataclasses.dataclass
class GetPaymentsProgramOnboardingPathParams:
    marketplace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplace_id', 'style': 'simple', 'explode': False }})
    payments_program_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payments_program_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentsProgramOnboardingSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPaymentsProgramOnboardingRequest:
    path_params: GetPaymentsProgramOnboardingPathParams = dataclasses.field()
    security: GetPaymentsProgramOnboardingSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentsProgramOnboardingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payments_program_onboarding_response: Optional[shared_paymentsprogramonboardingresponse.PaymentsProgramOnboardingResponse] = dataclasses.field(default=None)
    

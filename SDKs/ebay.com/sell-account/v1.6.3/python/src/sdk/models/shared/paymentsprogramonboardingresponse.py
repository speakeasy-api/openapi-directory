import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentsprogramonboardingsteps as shared_paymentsprogramonboardingsteps


@dataclass_json
@dataclasses.dataclass
class PaymentsProgramOnboardingResponse:
    r"""PaymentsProgramOnboardingResponse
    Contains the payments program onboarding response
    """
    
    onboarding_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardingStatus') }})
    steps: Optional[list[shared_paymentsprogramonboardingsteps.PaymentsProgramOnboardingSteps]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    

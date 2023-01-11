import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currencycode_enum as shared_currencycode_enum
from ..shared import savingsplanpaymentoption_enum as shared_savingsplanpaymentoption_enum
from ..shared import savingsplantype_enum as shared_savingsplantype_enum


@dataclass_json
@dataclasses.dataclass
class ParentSavingsPlanOffering:
    r"""ParentSavingsPlanOffering
    Information about a Savings Plan offering.
    """
    
    currency: Optional[shared_currencycode_enum.CurrencyCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    duration_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSeconds') }})
    offering_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    payment_option: Optional[shared_savingsplanpaymentoption_enum.SavingsPlanPaymentOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentOption') }})
    plan_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planDescription') }})
    plan_type: Optional[shared_savingsplantype_enum.SavingsPlanTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planType') }})
    

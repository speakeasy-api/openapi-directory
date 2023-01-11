import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currencycode_enum as shared_currencycode_enum
from ..shared import savingsplanpaymentoption_enum as shared_savingsplanpaymentoption_enum
from ..shared import savingsplanproducttype_enum as shared_savingsplanproducttype_enum
from ..shared import savingsplantype_enum as shared_savingsplantype_enum
from ..shared import savingsplanstate_enum as shared_savingsplanstate_enum


@dataclass_json
@dataclasses.dataclass
class SavingsPlan:
    r"""SavingsPlan
    Information about a Savings Plan.
    """
    
    commitment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitment') }})
    currency: Optional[shared_currencycode_enum.CurrencyCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ec2_instance_family: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2InstanceFamily') }})
    end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    offering_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    payment_option: Optional[shared_savingsplanpaymentoption_enum.SavingsPlanPaymentOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentOption') }})
    product_types: Optional[list[shared_savingsplanproducttype_enum.SavingsPlanProductTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypes') }})
    recurring_payment_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringPaymentAmount') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    savings_plan_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanArn') }})
    savings_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanId') }})
    savings_plan_type: Optional[shared_savingsplantype_enum.SavingsPlanTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanType') }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    state: Optional[shared_savingsplanstate_enum.SavingsPlanStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    term_duration_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termDurationInSeconds') }})
    upfront_payment_amount: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upfrontPaymentAmount') }})
    

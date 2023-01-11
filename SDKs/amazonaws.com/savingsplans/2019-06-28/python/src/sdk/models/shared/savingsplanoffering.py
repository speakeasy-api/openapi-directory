import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currencycode_enum as shared_currencycode_enum
from ..shared import savingsplanpaymentoption_enum as shared_savingsplanpaymentoption_enum
from ..shared import savingsplantype_enum as shared_savingsplantype_enum
from ..shared import savingsplanproducttype_enum as shared_savingsplanproducttype_enum


@dataclass_json
@dataclasses.dataclass
class SavingsPlanOffering:
    r"""SavingsPlanOffering
    Information about a Savings Plan offering.
    """
    
    currency: Optional[shared_currencycode_enum.CurrencyCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSeconds') }})
    offering_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    operation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    payment_option: Optional[shared_savingsplanpaymentoption_enum.SavingsPlanPaymentOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentOption') }})
    plan_type: Optional[shared_savingsplantype_enum.SavingsPlanTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planType') }})
    product_types: Optional[list[shared_savingsplanproducttype_enum.SavingsPlanProductTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypes') }})
    properties: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    service_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCode') }})
    usage_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageType') }})
    

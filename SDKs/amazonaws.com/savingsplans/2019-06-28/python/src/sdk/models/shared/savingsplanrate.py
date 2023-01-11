import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currencycode_enum as shared_currencycode_enum
from ..shared import savingsplanproducttype_enum as shared_savingsplanproducttype_enum
from ..shared import savingsplanrateservicecode_enum as shared_savingsplanrateservicecode_enum
from ..shared import savingsplanrateunit_enum as shared_savingsplanrateunit_enum


@dataclass_json
@dataclasses.dataclass
class SavingsPlanRate:
    r"""SavingsPlanRate
    Information about a Savings Plan rate.
    """
    
    currency: Optional[shared_currencycode_enum.CurrencyCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    operation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    product_type: Optional[shared_savingsplanproducttype_enum.SavingsPlanProductTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productType') }})
    properties: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    rate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    service_code: Optional[shared_savingsplanrateservicecode_enum.SavingsPlanRateServiceCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCode') }})
    unit: Optional[shared_savingsplanrateunit_enum.SavingsPlanRateUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    usage_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageType') }})
    

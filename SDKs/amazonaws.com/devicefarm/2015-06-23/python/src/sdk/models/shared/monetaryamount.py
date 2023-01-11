import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currencycode_enum as shared_currencycode_enum


@dataclass_json
@dataclasses.dataclass
class MonetaryAmount:
    r"""MonetaryAmount
    A number that represents the monetary amount for an offering or transaction.
    """
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency_code: Optional[shared_currencycode_enum.CurrencyCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    

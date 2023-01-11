import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Currency:
    r"""Currency
    Currency
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    decimal_digits: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalDigits') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_plural: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('namePlural') }})
    rounding: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rounding') }})
    symbol: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    symbol_native: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbolNative') }})
    

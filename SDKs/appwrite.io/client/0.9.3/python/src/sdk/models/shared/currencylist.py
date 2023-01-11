import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currency as shared_currency


@dataclass_json
@dataclasses.dataclass
class CurrencyList:
    r"""CurrencyList
    Currencies List
    """
    
    currencies: list[shared_currency.Currency] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencies') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clickincludedandvariableprice as shared_clickincludedandvariableprice


@dataclass_json
@dataclasses.dataclass
class VariableModelInfo:
    r"""VariableModelInfo
    Internal usage: Old offer type. Describe the fix and variable model information
    """
    
    click_included_and_variable_prices: list[shared_clickincludedandvariableprice.ClickIncludedAndVariablePrice] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickIncludedAndVariablePrices') }})
    overflow_click_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('overflowClickCount') }})
    overflow_click_price: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('overflowClickPrice') }})
    

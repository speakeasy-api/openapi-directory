import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clickincludedandadditionalclickprice as shared_clickincludedandadditionalclickprice


@dataclass_json
@dataclasses.dataclass
class FixedAndVariableClickModelInfo:
    r"""FixedAndVariableClickModelInfo
    Internal usage: Old offer type. Describe the fix and variable model information
    """
    
    click_included_and_additional_click_prices: list[shared_clickincludedandadditionalclickprice.ClickIncludedAndAdditionalClickPrice] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickIncludedAndAdditionalClickPrices') }})
    

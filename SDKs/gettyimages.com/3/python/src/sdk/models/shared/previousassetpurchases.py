import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import previousassetpurchase as shared_previousassetpurchase


@dataclass_json
@dataclasses.dataclass
class PreviousAssetPurchases:
    previous_purchases: Optional[list[shared_previousassetpurchase.PreviousAssetPurchase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_purchases') }})
    result_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    

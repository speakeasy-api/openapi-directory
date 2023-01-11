import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderidentifier as shared_orderidentifier


@dataclass_json
@dataclasses.dataclass
class ClearMerchantOrderInfoListRequest:
    orders: list[shared_orderidentifier.OrderIdentifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    

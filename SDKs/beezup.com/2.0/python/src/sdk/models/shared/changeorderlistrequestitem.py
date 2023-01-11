import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderidentifierwithetag as shared_orderidentifierwithetag


@dataclass_json
@dataclasses.dataclass
class ChangeOrderListRequestItem:
    r"""ChangeOrderListRequestItem
    Contains the order identifier and the change order request
    """
    
    order: shared_orderidentifierwithetag.OrderIdentifierWithETag = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    change_order_request: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeOrderRequest') }})
    

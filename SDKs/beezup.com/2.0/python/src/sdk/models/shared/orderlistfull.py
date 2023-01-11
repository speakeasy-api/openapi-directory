import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderlistfulllinks as shared_orderlistfulllinks
from ..shared import order as shared_order
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult


@dataclass_json
@dataclasses.dataclass
class OrderListFull:
    r"""OrderListFull
    The order list with all information we have from the orders and its items.\
    The paginationResult properties can be null if the list is empty.
    
    """
    
    links: shared_orderlistfulllinks.OrderListFullLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    orders: list[shared_order.Order] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    pagination_result: Optional[shared_beezup_common_paginationresult.BeezUpCommonPaginationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    

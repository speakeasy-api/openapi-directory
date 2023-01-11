import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderlistlightlinks as shared_orderlistlightlinks
from ..shared import orderheader as shared_orderheader
from ..shared import beezup_common_paginationresult as shared_beezup_common_paginationresult


@dataclass_json
@dataclasses.dataclass
class OrderListLight:
    r"""OrderListLight
    The order list with minimum information we have from the orders.\
    The paginationResult properties can be null if the list is empty.
    
    """
    
    links: shared_orderlistlightlinks.OrderListLightLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    orders: list[shared_orderheader.OrderHeader] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    pagination_result: Optional[shared_beezup_common_paginationresult.BeezUpCommonPaginationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    

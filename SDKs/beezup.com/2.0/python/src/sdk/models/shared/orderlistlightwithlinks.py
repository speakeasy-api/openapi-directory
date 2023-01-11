import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderlistlightlinks as shared_orderlistlightlinks
from ..shared import orderheaderwithlinks as shared_orderheaderwithlinks
from ..shared import paginationresult as shared_paginationresult


@dataclass_json
@dataclasses.dataclass
class OrderListLightWithLinks:
    links: shared_orderlistlightlinks.OrderListLightLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    orders: list[shared_orderheaderwithlinks.OrderHeaderWithLinks] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    pagination_result: shared_paginationresult.PaginationResult = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    

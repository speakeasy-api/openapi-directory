import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderlistfulllinks as shared_orderlistfulllinks
from ..shared import orderwithlinks as shared_orderwithlinks
from ..shared import paginationresult as shared_paginationresult


@dataclass_json
@dataclasses.dataclass
class OrderListFullWithLinks:
    links: shared_orderlistfulllinks.OrderListFullLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    orders: list[shared_orderwithlinks.OrderWithLinks] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    pagination_result: shared_paginationresult.PaginationResult = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paginationResult') }})
    

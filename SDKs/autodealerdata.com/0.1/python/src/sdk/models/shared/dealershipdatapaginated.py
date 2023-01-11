import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dealershipdata as shared_dealershipdata


@dataclass_json
@dataclasses.dataclass
class DealershipDataPaginated:
    dealers: list[shared_dealershipdata.DealershipData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealers') }})
    max_pages: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPages') }})
    page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    

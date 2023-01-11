import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paginationresultlinks as shared_paginationresultlinks


@dataclass_json
@dataclasses.dataclass
class PaginationResult:
    entry_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryCount') }})
    links: shared_paginationresultlinks.PaginationResultLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCount') }})
    total_entry_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalEntryCount') }})
    

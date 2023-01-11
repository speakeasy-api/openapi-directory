import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domains as shared_domains


@dataclass_json
@dataclasses.dataclass
class SearchResults:
    time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    domains: Optional[list[shared_domains.Domains]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import page as shared_page


@dataclass_json
@dataclasses.dataclass
class ListPagesByContactResult:
    pages: list[shared_page.Page] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pages') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hook_event as shared_hook_event


@dataclass_json
@dataclasses.dataclass
class PaginatedHookEvents:
    r"""PaginatedHookEvents
    A paginated list of webhook types available to subscribe on.
    """
    
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pagelen: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagelen') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    values: Optional[list[shared_hook_event.HookEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

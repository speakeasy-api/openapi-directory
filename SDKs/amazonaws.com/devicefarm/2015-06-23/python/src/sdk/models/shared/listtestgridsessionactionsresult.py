import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testgridsessionaction as shared_testgridsessionaction


@dataclass_json
@dataclasses.dataclass
class ListTestGridSessionActionsResult:
    actions: Optional[list[shared_testgridsessionaction.TestGridSessionAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testgridsession as shared_testgridsession


@dataclass_json
@dataclasses.dataclass
class ListTestGridSessionsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    test_grid_sessions: Optional[list[shared_testgridsession.TestGridSession]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testGridSessions') }})
    

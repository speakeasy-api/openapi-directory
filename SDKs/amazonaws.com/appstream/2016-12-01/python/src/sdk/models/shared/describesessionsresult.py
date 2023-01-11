import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import session as shared_session


@dataclass_json
@dataclasses.dataclass
class DescribeSessionsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sessions: Optional[list[shared_session.Session]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sessions') }})
    

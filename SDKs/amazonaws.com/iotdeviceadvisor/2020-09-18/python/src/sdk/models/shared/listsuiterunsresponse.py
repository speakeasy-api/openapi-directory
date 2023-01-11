import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suiteruninformation as shared_suiteruninformation


@dataclass_json
@dataclasses.dataclass
class ListSuiteRunsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    suite_runs_list: Optional[list[shared_suiteruninformation.SuiteRunInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteRunsList') }})
    

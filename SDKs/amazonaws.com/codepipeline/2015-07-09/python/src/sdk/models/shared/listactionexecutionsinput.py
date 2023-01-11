import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionexecutionfilter as shared_actionexecutionfilter


@dataclass_json
@dataclasses.dataclass
class ListActionExecutionsInput:
    pipeline_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    filter: Optional[shared_actionexecutionfilter.ActionExecutionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

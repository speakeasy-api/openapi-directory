import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListPipelineExecutionsInput:
    r"""ListPipelineExecutionsInput
    Represents the input of a <code>ListPipelineExecutions</code> action.
    """
    
    pipeline_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

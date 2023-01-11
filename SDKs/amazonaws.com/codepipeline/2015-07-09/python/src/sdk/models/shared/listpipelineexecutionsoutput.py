import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelineexecutionsummary as shared_pipelineexecutionsummary


@dataclass_json
@dataclasses.dataclass
class ListPipelineExecutionsOutput:
    r"""ListPipelineExecutionsOutput
    Represents the output of a <code>ListPipelineExecutions</code> action.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    pipeline_execution_summaries: Optional[list[shared_pipelineexecutionsummary.PipelineExecutionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionSummaries') }})
    

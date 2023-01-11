import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelinesummary as shared_pipelinesummary


@dataclass_json
@dataclasses.dataclass
class ListPipelinesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    pipeline_summaries: Optional[list[shared_pipelinesummary.PipelineSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineSummaries') }})
    

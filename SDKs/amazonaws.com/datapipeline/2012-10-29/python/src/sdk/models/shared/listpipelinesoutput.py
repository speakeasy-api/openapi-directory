import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelineidname as shared_pipelineidname


@dataclass_json
@dataclasses.dataclass
class ListPipelinesOutput:
    r"""ListPipelinesOutput
    Contains the output of ListPipelines.
    """
    
    pipeline_id_list: list[shared_pipelineidname.PipelineIDName] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineIdList') }})
    has_more_results: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMoreResults') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marker') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelineobject as shared_pipelineobject


@dataclass_json
@dataclasses.dataclass
class DescribeObjectsOutput:
    r"""DescribeObjectsOutput
    Contains the output of DescribeObjects.
    """
    
    pipeline_objects: list[shared_pipelineobject.PipelineObject] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineObjects') }})
    has_more_results: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMoreResults') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marker') }})
    

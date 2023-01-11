import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipeline as shared_pipeline
from ..shared import warning as shared_warning


@dataclass_json
@dataclasses.dataclass
class ReadPipelineResponse:
    r"""ReadPipelineResponse
    The <code>ReadPipelineResponse</code> structure.
    """
    
    pipeline: Optional[shared_pipeline.Pipeline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pipeline') }})
    warnings: Optional[list[shared_warning.Warning]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Warnings') }})
    

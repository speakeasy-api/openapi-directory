import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeactivatePipelineInput:
    r"""DeactivatePipelineInput
    Contains the parameters for DeactivatePipeline.
    """
    
    pipeline_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    cancel_active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelActive') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sagemakerpipelineparameter as shared_sagemakerpipelineparameter


@dataclass_json
@dataclasses.dataclass
class SageMakerPipelineParameters:
    r"""SageMakerPipelineParameters
    These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.
    """
    
    pipeline_parameter_list: Optional[list[shared_sagemakerpipelineparameter.SageMakerPipelineParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineParameterList') }})
    

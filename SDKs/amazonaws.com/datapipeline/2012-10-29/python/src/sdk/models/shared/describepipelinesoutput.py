import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelinedescription as shared_pipelinedescription


@dataclass_json
@dataclasses.dataclass
class DescribePipelinesOutput:
    r"""DescribePipelinesOutput
    Contains the output of DescribePipelines.
    """
    
    pipeline_description_list: list[shared_pipelinedescription.PipelineDescription] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineDescriptionList') }})
    

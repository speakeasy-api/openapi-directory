import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameterobject as shared_parameterobject
from ..shared import parametervalue as shared_parametervalue
from ..shared import pipelineobject as shared_pipelineobject


@dataclass_json
@dataclasses.dataclass
class GetPipelineDefinitionOutput:
    r"""GetPipelineDefinitionOutput
    Contains the output of GetPipelineDefinition.
    """
    
    parameter_objects: Optional[list[shared_parameterobject.ParameterObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterObjects') }})
    parameter_values: Optional[list[shared_parametervalue.ParameterValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterValues') }})
    pipeline_objects: Optional[list[shared_pipelineobject.PipelineObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineObjects') }})
    

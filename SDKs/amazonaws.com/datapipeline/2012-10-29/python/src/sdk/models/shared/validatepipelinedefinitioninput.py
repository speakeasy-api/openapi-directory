import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameterobject as shared_parameterobject
from ..shared import parametervalue as shared_parametervalue
from ..shared import pipelineobject as shared_pipelineobject


@dataclass_json
@dataclasses.dataclass
class ValidatePipelineDefinitionInput:
    r"""ValidatePipelineDefinitionInput
    Contains the parameters for ValidatePipelineDefinition.
    """
    
    pipeline_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    pipeline_objects: list[shared_pipelineobject.PipelineObject] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineObjects') }})
    parameter_objects: Optional[list[shared_parameterobject.ParameterObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterObjects') }})
    parameter_values: Optional[list[shared_parametervalue.ParameterValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterValues') }})
    

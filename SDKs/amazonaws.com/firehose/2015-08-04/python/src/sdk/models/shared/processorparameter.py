import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import processorparametername_enum as shared_processorparametername_enum


@dataclass_json
@dataclasses.dataclass
class ProcessorParameter:
    r"""ProcessorParameter
    Describes the processor parameter.
    """
    
    parameter_name: shared_processorparametername_enum.ProcessorParameterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterName') }})
    parameter_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterValue') }})
    

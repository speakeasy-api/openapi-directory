import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputconfiguration as shared_inputconfiguration
from ..shared import inputdefinition as shared_inputdefinition


@dataclass_json
@dataclasses.dataclass
class Input:
    r"""Input
    Information about the input.
    """
    
    input_configuration: Optional[shared_inputconfiguration.InputConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfiguration') }})
    input_definition: Optional[shared_inputdefinition.InputDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDefinition') }})
    

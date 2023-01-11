import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputconfiguration as shared_inputconfiguration


@dataclass_json
@dataclasses.dataclass
class CreateInputResponse:
    input_configuration: Optional[shared_inputconfiguration.InputConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfiguration') }})
    

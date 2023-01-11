import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functionconfiguration as shared_functionconfiguration


@dataclass_json
@dataclasses.dataclass
class CreateFunctionResponse:
    function_configuration: Optional[shared_functionconfiguration.FunctionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionConfiguration') }})
    

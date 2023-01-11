import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import functiondefaultconfig as shared_functiondefaultconfig
from ..shared import function as shared_function


@dataclass_json
@dataclasses.dataclass
class FunctionDefinitionVersion:
    r"""FunctionDefinitionVersion
    Information about a function definition version.
    """
    
    default_config: Optional[shared_functiondefaultconfig.FunctionDefaultConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultConfig') }})
    functions: Optional[list[shared_function.Function]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Functions') }})
    

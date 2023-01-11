import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import function as shared_function


@dataclass_json
@dataclasses.dataclass
class FunctionList:
    r"""FunctionList
    Functions List
    """
    
    functions: list[shared_function.Function] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functions') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    

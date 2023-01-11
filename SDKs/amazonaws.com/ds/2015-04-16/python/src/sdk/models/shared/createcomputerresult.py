import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computer as shared_computer


@dataclass_json
@dataclasses.dataclass
class CreateComputerResult:
    r"""CreateComputerResult
    Contains the results for the <a>CreateComputer</a> operation.
    """
    
    computer: Optional[shared_computer.Computer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Computer') }})
    

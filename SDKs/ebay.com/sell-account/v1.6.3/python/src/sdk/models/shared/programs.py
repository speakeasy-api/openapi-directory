import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import program as shared_program


@dataclass_json
@dataclasses.dataclass
class Programs:
    r"""Programs
    A list of the supported seller programs.
    """
    
    programs: Optional[list[shared_program.Program]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programs') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateLunaClientRequest:
    r"""CreateLunaClientRequest
    Contains the inputs for the <a>CreateLunaClient</a> action.
    """
    
    certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    

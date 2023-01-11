import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import control as shared_control


@dataclass_json
@dataclasses.dataclass
class ControlSet:
    r"""ControlSet
     A set of controls in Audit Manager. 
    """
    
    controls: Optional[list[shared_control.Control]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controls') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

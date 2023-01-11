import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceportstate as shared_instanceportstate


@dataclass_json
@dataclasses.dataclass
class GetInstancePortStatesResult:
    port_states: Optional[list[shared_instanceportstate.InstancePortState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portStates') }})
    

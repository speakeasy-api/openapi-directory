import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statemachinelistitem as shared_statemachinelistitem


@dataclass_json
@dataclasses.dataclass
class ListStateMachinesOutput:
    state_machines: list[shared_statemachinelistitem.StateMachineListItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachines') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import automatictransition as shared_automatictransition


@dataclass_json
@dataclasses.dataclass
class ConfigureAutomaticTransitionRequest:
    automatic_transitions: list[shared_automatictransition.AutomaticTransition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('automaticTransitions') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action


@dataclass_json
@dataclasses.dataclass
class ActionHistoryDetails:
    r"""ActionHistoryDetails
     The description of details of the event. 
    """
    
    action: shared_action.Action = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

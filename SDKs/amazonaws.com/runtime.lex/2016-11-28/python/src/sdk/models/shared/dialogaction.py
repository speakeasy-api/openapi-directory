import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fulfillmentstate_enum as shared_fulfillmentstate_enum
from ..shared import messageformattype_enum as shared_messageformattype_enum
from ..shared import dialogactiontype_enum as shared_dialogactiontype_enum


@dataclass_json
@dataclasses.dataclass
class DialogAction:
    r"""DialogAction
    Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
    """
    
    type: shared_dialogactiontype_enum.DialogActionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    fulfillment_state: Optional[shared_fulfillmentstate_enum.FulfillmentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentState') }})
    intent_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    message_format: Optional[shared_messageformattype_enum.MessageFormatTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    slot_to_elicit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotToElicit') }})
    slots: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    

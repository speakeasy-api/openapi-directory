import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import confirmationstatus_enum as shared_confirmationstatus_enum
from ..shared import dialogactiontype_enum as shared_dialogactiontype_enum
from ..shared import fulfillmentstate_enum as shared_fulfillmentstate_enum


@dataclass_json
@dataclasses.dataclass
class IntentSummary:
    r"""IntentSummary
    Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state.
    """
    
    dialog_action_type: shared_dialogactiontype_enum.DialogActionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogActionType') }})
    checkpoint_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkpointLabel') }})
    confirmation_status: Optional[shared_confirmationstatus_enum.ConfirmationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationStatus') }})
    fulfillment_state: Optional[shared_fulfillmentstate_enum.FulfillmentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentState') }})
    intent_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    slot_to_elicit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotToElicit') }})
    slots: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    

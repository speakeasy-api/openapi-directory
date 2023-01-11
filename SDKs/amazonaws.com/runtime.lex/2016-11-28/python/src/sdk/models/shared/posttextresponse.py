import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activecontext as shared_activecontext
from ..shared import predictedintent as shared_predictedintent
from ..shared import dialogstate_enum as shared_dialogstate_enum
from ..shared import messageformattype_enum as shared_messageformattype_enum
from ..shared import intentconfidence as shared_intentconfidence
from ..shared import responsecard as shared_responsecard
from ..shared import sentimentresponse as shared_sentimentresponse


@dataclass_json
@dataclasses.dataclass
class PostTextResponse:
    active_contexts: Optional[list[shared_activecontext.ActiveContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeContexts') }})
    alternative_intents: Optional[list[shared_predictedintent.PredictedIntent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeIntents') }})
    bot_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    dialog_state: Optional[shared_dialogstate_enum.DialogStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogState') }})
    intent_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    message_format: Optional[shared_messageformattype_enum.MessageFormatTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    nlu_intent_confidence: Optional[shared_intentconfidence.IntentConfidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluIntentConfidence') }})
    response_card: Optional[shared_responsecard.ResponseCard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCard') }})
    sentiment_response: Optional[shared_sentimentresponse.SentimentResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentResponse') }})
    session_attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionAttributes') }})
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    slot_to_elicit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotToElicit') }})
    slots: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    

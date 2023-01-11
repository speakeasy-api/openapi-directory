import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dialogcodehooksettings as shared_dialogcodehooksettings
from ..shared import fulfillmentcodehooksettings as shared_fulfillmentcodehooksettings
from ..shared import inputcontext as shared_inputcontext
from ..shared import intentclosingsetting as shared_intentclosingsetting
from ..shared import intentconfirmationsetting as shared_intentconfirmationsetting
from ..shared import kendraconfiguration as shared_kendraconfiguration
from ..shared import outputcontext as shared_outputcontext
from ..shared import sampleutterance as shared_sampleutterance


@dataclass_json
@dataclasses.dataclass
class CreateIntentResponse:
    bot_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    creation_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dialog_code_hook: Optional[shared_dialogcodehooksettings.DialogCodeHookSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogCodeHook') }})
    fulfillment_code_hook: Optional[shared_fulfillmentcodehooksettings.FulfillmentCodeHookSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentCodeHook') }})
    input_contexts: Optional[list[shared_inputcontext.InputContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContexts') }})
    intent_closing_setting: Optional[shared_intentclosingsetting.IntentClosingSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentClosingSetting') }})
    intent_confirmation_setting: Optional[shared_intentconfirmationsetting.IntentConfirmationSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentConfirmationSetting') }})
    intent_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentId') }})
    intent_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    kendra_configuration: Optional[shared_kendraconfiguration.KendraConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraConfiguration') }})
    locale_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    output_contexts: Optional[list[shared_outputcontext.OutputContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parent_intent_signature: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntentSignature') }})
    sample_utterances: Optional[list[shared_sampleutterance.SampleUtterance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    

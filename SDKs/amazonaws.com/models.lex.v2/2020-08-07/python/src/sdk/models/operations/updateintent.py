import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responsespecification as shared_responsespecification
from ..shared import promptspecification as shared_promptspecification
from ..shared import inputcontext as shared_inputcontext
from ..shared import outputcontext as shared_outputcontext
from ..shared import sampleutterance as shared_sampleutterance
from ..shared import slotpriority as shared_slotpriority
from ..shared import updateintentresponse as shared_updateintentresponse


@dataclasses.dataclass
class UpdateIntentPathParams:
    bot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    intent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'intentId', 'style': 'simple', 'explode': False }})
    locale_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateIntentHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateIntentRequestBodyDialogCodeHook:
    r"""UpdateIntentRequestBodyDialogCodeHook
    Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateIntentRequestBodyFulfillmentCodeHook:
    r"""UpdateIntentRequestBodyFulfillmentCodeHook
    Determines if a Lambda function should be invoked for a specific intent.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateIntentRequestBodyIntentClosingSetting:
    r"""UpdateIntentRequestBodyIntentClosingSetting
    Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    closing_response: Optional[shared_responsespecification.ResponseSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closingResponse') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateIntentRequestBodyIntentConfirmationSetting:
    r"""UpdateIntentRequestBodyIntentConfirmationSetting
    Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    declination_response: Optional[shared_responsespecification.ResponseSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('declinationResponse') }})
    prompt_specification: Optional[shared_promptspecification.PromptSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promptSpecification') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateIntentRequestBodyKendraConfiguration:
    r"""UpdateIntentRequestBodyKendraConfiguration
    Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
    """
    
    kendra_index: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraIndex') }})
    query_filter_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFilterString') }})
    query_filter_string_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFilterStringEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateIntentRequestBody:
    intent_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dialog_code_hook: Optional[UpdateIntentRequestBodyDialogCodeHook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogCodeHook') }})
    fulfillment_code_hook: Optional[UpdateIntentRequestBodyFulfillmentCodeHook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentCodeHook') }})
    input_contexts: Optional[list[shared_inputcontext.InputContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContexts') }})
    intent_closing_setting: Optional[UpdateIntentRequestBodyIntentClosingSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentClosingSetting') }})
    intent_confirmation_setting: Optional[UpdateIntentRequestBodyIntentConfirmationSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentConfirmationSetting') }})
    kendra_configuration: Optional[UpdateIntentRequestBodyKendraConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kendraConfiguration') }})
    output_contexts: Optional[list[shared_outputcontext.OutputContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parent_intent_signature: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentIntentSignature') }})
    sample_utterances: Optional[list[shared_sampleutterance.SampleUtterance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    slot_priorities: Optional[list[shared_slotpriority.SlotPriority]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotPriorities') }})
    

@dataclasses.dataclass
class UpdateIntentRequest:
    headers: UpdateIntentHeaders = dataclasses.field()
    path_params: UpdateIntentPathParams = dataclasses.field()
    request: UpdateIntentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateIntentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_intent_response: Optional[shared_updateintentresponse.UpdateIntentResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    

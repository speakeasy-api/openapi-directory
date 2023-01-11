import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fulfillmentstate_enum as shared_fulfillmentstate_enum
from ..shared import messageformattype_enum as shared_messageformattype_enum
from ..shared import dialogactiontype_enum as shared_dialogactiontype_enum
from ..shared import activecontext as shared_activecontext
from ..shared import intentsummary as shared_intentsummary
from ..shared import putsessionresponse as shared_putsessionresponse


@dataclasses.dataclass
class PutSessionPathParams:
    bot_alias: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botAlias', 'style': 'simple', 'explode': False }})
    bot_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botName', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSessionHeaders:
    accept: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutSessionRequestBodyDialogAction:
    r"""PutSessionRequestBodyDialogAction
    Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
    """
    
    fulfillment_state: Optional[shared_fulfillmentstate_enum.FulfillmentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentState') }})
    intent_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentName') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    message_format: Optional[shared_messageformattype_enum.MessageFormatTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    slot_to_elicit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotToElicit') }})
    slots: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slots') }})
    type: Optional[shared_dialogactiontype_enum.DialogActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSessionRequestBody:
    active_contexts: Optional[list[shared_activecontext.ActiveContext]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeContexts') }})
    dialog_action: Optional[PutSessionRequestBodyDialogAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogAction') }})
    recent_intent_summary_view: Optional[list[shared_intentsummary.IntentSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentIntentSummaryView') }})
    session_attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionAttributes') }})
    

@dataclasses.dataclass
class PutSessionRequest:
    headers: PutSessionHeaders = dataclasses.field()
    path_params: PutSessionPathParams = dataclasses.field()
    request: PutSessionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_gateway_exception: Optional[Any] = dataclasses.field(default=None)
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    dependency_failed_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_acceptable_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    put_session_response: Optional[shared_putsessionresponse.PutSessionResponse] = dataclasses.field(default=None)
    

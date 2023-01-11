import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createbotlocaleresponse as shared_createbotlocaleresponse


@dataclasses.dataclass
class CreateBotLocalePathParams:
    bot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBotLocaleHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBotLocaleRequestBodyVoiceSettings:
    r"""CreateBotLocaleRequestBodyVoiceSettings
    Defines settings for using an Amazon Polly voice to communicate with a user.
    """
    
    voice_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceId') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBotLocaleRequestBody:
    locale_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    nlu_intent_confidence_threshold: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluIntentConfidenceThreshold') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    voice_settings: Optional[CreateBotLocaleRequestBodyVoiceSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceSettings') }})
    

@dataclasses.dataclass
class CreateBotLocaleRequest:
    headers: CreateBotLocaleHeaders = dataclasses.field()
    path_params: CreateBotLocalePathParams = dataclasses.field()
    request: CreateBotLocaleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateBotLocaleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_bot_locale_response: Optional[shared_createbotlocaleresponse.CreateBotLocaleResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiologsetting as shared_audiologsetting
from ..shared import textlogsetting as shared_textlogsetting
from ..shared import botaliaslocalesettings as shared_botaliaslocalesettings
from ..shared import createbotaliasresponse as shared_createbotaliasresponse


@dataclasses.dataclass
class CreateBotAliasPathParams:
    bot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBotAliasHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBotAliasRequestBodyConversationLogSettings:
    r"""CreateBotAliasRequestBodyConversationLogSettings
    Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
    """
    
    audio_log_settings: Optional[list[shared_audiologsetting.AudioLogSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioLogSettings') }})
    text_log_settings: Optional[list[shared_textlogsetting.TextLogSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textLogSettings') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBotAliasRequestBodySentimentAnalysisSettings:
    r"""CreateBotAliasRequestBodySentimentAnalysisSettings
    Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
    """
    
    detect_sentiment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectSentiment') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateBotAliasRequestBody:
    bot_alias_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasName') }})
    bot_alias_locale_settings: Optional[dict[str, shared_botaliaslocalesettings.BotAliasLocaleSettings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasLocaleSettings') }})
    bot_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    conversation_log_settings: Optional[CreateBotAliasRequestBodyConversationLogSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationLogSettings') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    sentiment_analysis_settings: Optional[CreateBotAliasRequestBodySentimentAnalysisSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentAnalysisSettings') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateBotAliasRequest:
    headers: CreateBotAliasHeaders = dataclasses.field()
    path_params: CreateBotAliasPathParams = dataclasses.field()
    request: CreateBotAliasRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateBotAliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_bot_alias_response: Optional[shared_createbotaliasresponse.CreateBotAliasResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    

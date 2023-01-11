import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import botaliashistoryevent as shared_botaliashistoryevent
from ..shared import botaliaslocalesettings as shared_botaliaslocalesettings
from ..shared import botaliasstatus_enum as shared_botaliasstatus_enum
from ..shared import conversationlogsettings as shared_conversationlogsettings
from ..shared import sentimentanalysissettings as shared_sentimentanalysissettings


@dataclass_json
@dataclasses.dataclass
class DescribeBotAliasResponse:
    bot_alias_history_events: Optional[list[shared_botaliashistoryevent.BotAliasHistoryEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasHistoryEvents') }})
    bot_alias_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasId') }})
    bot_alias_locale_settings: Optional[dict[str, shared_botaliaslocalesettings.BotAliasLocaleSettings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasLocaleSettings') }})
    bot_alias_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasName') }})
    bot_alias_status: Optional[shared_botaliasstatus_enum.BotAliasStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasStatus') }})
    bot_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    conversation_log_settings: Optional[shared_conversationlogsettings.ConversationLogSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationLogSettings') }})
    creation_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_updated_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sentiment_analysis_settings: Optional[shared_sentimentanalysissettings.SentimentAnalysisSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentAnalysisSettings') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import botlocalesummary as shared_botlocalesummary


@dataclass_json
@dataclasses.dataclass
class ListBotLocalesResponse:
    bot_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_locale_summaries: Optional[list[shared_botlocalesummary.BotLocaleSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleSummaries') }})
    bot_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

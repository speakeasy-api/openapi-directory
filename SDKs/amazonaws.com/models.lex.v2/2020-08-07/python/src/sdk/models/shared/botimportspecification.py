import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataprivacy as shared_dataprivacy


@dataclass_json
@dataclasses.dataclass
class BotImportSpecification:
    r"""BotImportSpecification
    Provides the bot parameters required for importing a bot.
    """
    
    bot_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botName') }})
    data_privacy: shared_dataprivacy.DataPrivacy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPrivacy') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    bot_tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botTags') }})
    idle_session_ttl_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleSessionTTLInSeconds') }})
    test_bot_alias_tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testBotAliasTags') }})
    

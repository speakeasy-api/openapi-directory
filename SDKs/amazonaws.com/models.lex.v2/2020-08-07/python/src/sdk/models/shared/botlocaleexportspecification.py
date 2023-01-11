import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BotLocaleExportSpecification:
    r"""BotLocaleExportSpecification
    Provides the bot locale parameters required for exporting a bot locale.
    """
    
    bot_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    locale_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    

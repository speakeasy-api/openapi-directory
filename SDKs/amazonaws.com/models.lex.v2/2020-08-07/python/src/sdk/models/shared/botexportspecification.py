import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BotExportSpecification:
    r"""BotExportSpecification
    Provides the identity of a the bot that was exported.
    """
    
    bot_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    

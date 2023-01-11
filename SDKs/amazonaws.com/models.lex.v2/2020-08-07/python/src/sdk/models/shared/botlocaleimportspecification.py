import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import voicesettings as shared_voicesettings


@dataclass_json
@dataclasses.dataclass
class BotLocaleImportSpecification:
    r"""BotLocaleImportSpecification
    Provides the bot locale parameters required for importing a bot locale.
    """
    
    bot_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    locale_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    nlu_intent_confidence_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nluIntentConfidenceThreshold') }})
    voice_settings: Optional[shared_voicesettings.VoiceSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceSettings') }})
    

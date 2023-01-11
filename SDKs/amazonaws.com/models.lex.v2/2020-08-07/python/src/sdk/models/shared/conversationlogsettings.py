import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiologsetting as shared_audiologsetting
from ..shared import textlogsetting as shared_textlogsetting


@dataclass_json
@dataclasses.dataclass
class ConversationLogSettings:
    r"""ConversationLogSettings
    Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
    """
    
    audio_log_settings: Optional[list[shared_audiologsetting.AudioLogSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioLogSettings') }})
    text_log_settings: Optional[list[shared_textlogsetting.TextLogSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textLogSettings') }})
    

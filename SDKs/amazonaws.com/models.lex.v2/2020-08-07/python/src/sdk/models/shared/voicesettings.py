import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VoiceSettings:
    r"""VoiceSettings
    Defines settings for using an Amazon Polly voice to communicate with a user.
    """
    
    voice_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceId') }})
    

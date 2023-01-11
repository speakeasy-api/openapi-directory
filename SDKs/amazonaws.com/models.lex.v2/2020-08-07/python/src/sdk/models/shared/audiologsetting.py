import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiologdestination as shared_audiologdestination


@dataclass_json
@dataclasses.dataclass
class AudioLogSetting:
    r"""AudioLogSetting
    Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
    """
    
    destination: shared_audiologdestination.AudioLogDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recordingconfiguration as shared_recordingconfiguration


@dataclass_json
@dataclasses.dataclass
class CreateRecordingConfigurationResponse:
    recording_configuration: Optional[shared_recordingconfiguration.RecordingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingConfiguration') }})
    

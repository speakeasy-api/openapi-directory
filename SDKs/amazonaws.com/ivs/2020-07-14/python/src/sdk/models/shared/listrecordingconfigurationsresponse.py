import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recordingconfigurationsummary as shared_recordingconfigurationsummary


@dataclass_json
@dataclasses.dataclass
class ListRecordingConfigurationsResponse:
    recording_configurations: list[shared_recordingconfigurationsummary.RecordingConfigurationSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingConfigurations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

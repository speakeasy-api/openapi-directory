import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recordinggroup as shared_recordinggroup


@dataclass_json
@dataclasses.dataclass
class ConfigurationRecorder:
    r"""ConfigurationRecorder
    An object that represents the recording of configuration changes of an Amazon Web Services resource.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recording_group: Optional[shared_recordinggroup.RecordingGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingGroup') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleARN') }})
    

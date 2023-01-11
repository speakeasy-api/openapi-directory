import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationrecorder as shared_configurationrecorder


@dataclass_json
@dataclasses.dataclass
class PutConfigurationRecorderRequest:
    r"""PutConfigurationRecorderRequest
    The input for the <a>PutConfigurationRecorder</a> action.
    """
    
    configuration_recorder: shared_configurationrecorder.ConfigurationRecorder = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorder') }})
    

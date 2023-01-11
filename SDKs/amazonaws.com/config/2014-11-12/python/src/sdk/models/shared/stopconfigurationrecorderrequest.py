import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StopConfigurationRecorderRequest:
    r"""StopConfigurationRecorderRequest
    The input for the <a>StopConfigurationRecorder</a> action.
    """
    
    configuration_recorder_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorderName') }})
    

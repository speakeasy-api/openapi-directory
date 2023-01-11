import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartConfigurationRecorderRequest:
    r"""StartConfigurationRecorderRequest
    The input for the <a>StartConfigurationRecorder</a> action.
    """
    
    configuration_recorder_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorderName') }})
    

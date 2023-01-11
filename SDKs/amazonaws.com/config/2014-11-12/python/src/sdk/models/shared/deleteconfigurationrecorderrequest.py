import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteConfigurationRecorderRequest:
    r"""DeleteConfigurationRecorderRequest
    The request object for the <code>DeleteConfigurationRecorder</code> action.
    """
    
    configuration_recorder_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationRecorderName') }})
    

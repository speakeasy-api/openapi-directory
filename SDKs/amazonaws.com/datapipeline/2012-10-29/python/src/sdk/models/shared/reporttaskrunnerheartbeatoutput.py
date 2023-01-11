import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReportTaskRunnerHeartbeatOutput:
    r"""ReportTaskRunnerHeartbeatOutput
    Contains the output of ReportTaskRunnerHeartbeat.
    """
    
    terminate: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminate') }})
    

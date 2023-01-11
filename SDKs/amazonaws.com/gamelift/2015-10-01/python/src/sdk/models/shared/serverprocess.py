import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ServerProcess:
    r"""ServerProcess
    A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's <a>RuntimeConfiguration</a>.
    """
    
    concurrent_executions: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConcurrentExecutions') }})
    launch_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchPath') }})
    parameters: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    

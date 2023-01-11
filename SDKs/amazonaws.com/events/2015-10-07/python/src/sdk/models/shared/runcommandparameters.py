import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runcommandtarget as shared_runcommandtarget


@dataclass_json
@dataclasses.dataclass
class RunCommandParameters:
    r"""RunCommandParameters
    This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command. 
    """
    
    run_command_targets: list[shared_runcommandtarget.RunCommandTarget] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunCommandTargets') }})
    

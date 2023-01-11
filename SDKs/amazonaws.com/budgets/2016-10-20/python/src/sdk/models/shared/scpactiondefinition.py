import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScpActionDefinition:
    r"""ScpActionDefinition
     The service control policies (SCP) action definition details. 
    """
    
    policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    target_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetIds') }})
    

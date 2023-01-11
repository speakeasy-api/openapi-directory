import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OnPremConfig:
    r"""OnPremConfig
    A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
    """
    
    agent_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    

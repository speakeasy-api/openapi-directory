import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedagentname_enum as shared_managedagentname_enum


@dataclass_json
@dataclasses.dataclass
class ManagedAgentStateChange:
    r"""ManagedAgentStateChange
    An object representing a change in state for a managed agent.
    """
    
    container_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    managed_agent_name: shared_managedagentname_enum.ManagedAgentNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedAgentName') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

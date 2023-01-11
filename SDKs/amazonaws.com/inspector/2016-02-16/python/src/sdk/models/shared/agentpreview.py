import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agenthealth_enum as shared_agenthealth_enum


@dataclass_json
@dataclasses.dataclass
class AgentPreview:
    r"""AgentPreview
    Used as a response element in the <a>PreviewAgents</a> action.
    """
    
    agent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    agent_health: Optional[shared_agenthealth_enum.AgentHealthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealth') }})
    agent_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentVersion') }})
    auto_scaling_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroup') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    ipv4_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4Address') }})
    kernel_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernelVersion') }})
    operating_system: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystem') }})
    

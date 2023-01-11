import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agenthealthcode_enum as shared_agenthealthcode_enum
from ..shared import agenthealth_enum as shared_agenthealth_enum


@dataclass_json
@dataclasses.dataclass
class AgentFilter:
    r"""AgentFilter
    Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
    """
    
    agent_health_codes: list[shared_agenthealthcode_enum.AgentHealthCodeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealthCodes') }})
    agent_healths: list[shared_agenthealth_enum.AgentHealthEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealths') }})
    

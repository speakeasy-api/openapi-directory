import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agenthealth_enum as shared_agenthealth_enum
from ..shared import agenthealthcode_enum as shared_agenthealthcode_enum
from ..shared import telemetrymetadata as shared_telemetrymetadata


@dataclass_json
@dataclasses.dataclass
class AssessmentRunAgent:
    r"""AssessmentRunAgent
    Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.
    """
    
    agent_health: shared_agenthealth_enum.AgentHealthEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealth') }})
    agent_health_code: shared_agenthealthcode_enum.AgentHealthCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealthCode') }})
    agent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    assessment_run_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunArn') }})
    telemetry_metadata: list[shared_telemetrymetadata.TelemetryMetadata] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetryMetadata') }})
    agent_health_details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealthDetails') }})
    auto_scaling_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroup') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentconfigurationstatus as shared_agentconfigurationstatus


@dataclass_json
@dataclasses.dataclass
class StopDataCollectionByAgentIdsResponse:
    agents_configuration_status: Optional[list[shared_agentconfigurationstatus.AgentConfigurationStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentsConfigurationStatus') }})
    

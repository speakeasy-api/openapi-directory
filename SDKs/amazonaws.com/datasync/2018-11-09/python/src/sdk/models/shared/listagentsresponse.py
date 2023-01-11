import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import agentlistentry as shared_agentlistentry


@dataclass_json
@dataclasses.dataclass
class ListAgentsResponse:
    r"""ListAgentsResponse
    ListAgentsResponse
    """
    
    agents: Optional[list[shared_agentlistentry.AgentListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Agents') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

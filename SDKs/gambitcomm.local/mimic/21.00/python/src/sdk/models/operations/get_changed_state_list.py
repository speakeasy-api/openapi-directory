import dataclasses
from typing import Optional
from ..shared import agentstate as shared_agentstate


@dataclasses.dataclass
class GetChangedStateListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    agent_states: Optional[list[shared_agentstate.AgentState]] = dataclasses.field(default=None)
    

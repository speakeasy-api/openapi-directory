import dataclasses
from typing import Optional
from ..shared import trapdest as shared_trapdest


@dataclasses.dataclass
class TrapConfigListPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TrapConfigListRequest:
    path_params: TrapConfigListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TrapConfigListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trap_dests: Optional[list[shared_trapdest.TrapDest]] = dataclasses.field(default=None)
    

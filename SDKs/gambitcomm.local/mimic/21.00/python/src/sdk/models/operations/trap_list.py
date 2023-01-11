import dataclasses
from typing import Optional


@dataclasses.dataclass
class TrapListPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TrapListRequest:
    path_params: TrapListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TrapListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trap_list_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    

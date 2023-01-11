import dataclasses
from typing import Optional


@dataclasses.dataclass
class HaltPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class HaltRequest:
    path_params: HaltPathParams = dataclasses.field()
    

@dataclasses.dataclass
class HaltResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    halt_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

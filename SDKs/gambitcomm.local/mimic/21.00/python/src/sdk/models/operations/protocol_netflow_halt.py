import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolNetflowHaltPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowHaltRequest:
    path_params: ProtocolNetflowHaltPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowHaltResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_netflow_halt_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

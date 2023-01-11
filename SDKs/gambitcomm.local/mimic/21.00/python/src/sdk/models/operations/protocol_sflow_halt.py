import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSflowHaltPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSflowHaltRequest:
    path_params: ProtocolSflowHaltPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSflowHaltResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_sflow_halt_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

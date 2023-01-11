import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolWebPortAddPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolWebPortAddRequest:
    path_params: ProtocolWebPortAddPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolWebPortAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_web_port_add_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

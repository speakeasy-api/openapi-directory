import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolWebPortRemovePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolWebPortRemoveRequest:
    path_params: ProtocolWebPortRemovePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolWebPortRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_web_port_remove_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

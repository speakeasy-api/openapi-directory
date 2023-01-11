import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolWebPortExistsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolWebPortExistsRequest:
    path_params: ProtocolWebPortExistsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolWebPortExistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_web_port_exists_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    

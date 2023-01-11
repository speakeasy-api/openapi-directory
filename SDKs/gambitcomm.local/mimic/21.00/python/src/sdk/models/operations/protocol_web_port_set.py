import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolWebPortSetPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    protocol: str = dataclasses.field(metadata={'path_param': { 'field_name': 'protocol', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolWebPortSetRequest:
    path_params: ProtocolWebPortSetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolWebPortSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_web_port_set_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

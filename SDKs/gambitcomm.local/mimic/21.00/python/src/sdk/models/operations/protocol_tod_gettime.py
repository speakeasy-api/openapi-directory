import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTodGettimePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    num_retries: int = dataclasses.field(metadata={'path_param': { 'field_name': 'numRetries', 'style': 'simple', 'explode': False }})
    port_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'portNum', 'style': 'simple', 'explode': False }})
    script_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scriptName', 'style': 'simple', 'explode': False }})
    server_addr: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serverAddr', 'style': 'simple', 'explode': False }})
    time_sec: int = dataclasses.field(metadata={'path_param': { 'field_name': 'timeSec', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTodGettimeRequest:
    path_params: ProtocolTodGettimePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTodGettimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_tod_gettime_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class StopIpaliasPathParams:
    ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopIpaliasRequest:
    path_params: StopIpaliasPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StopIpaliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    stop_ipalias_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

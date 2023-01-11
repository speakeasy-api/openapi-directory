import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolNetflowReloadPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowReloadRequest:
    path_params: ProtocolNetflowReloadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowReloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_netflow_reload_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSflowReloadPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSflowReloadRequest:
    path_params: ProtocolSflowReloadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSflowReloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_sflow_reload_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

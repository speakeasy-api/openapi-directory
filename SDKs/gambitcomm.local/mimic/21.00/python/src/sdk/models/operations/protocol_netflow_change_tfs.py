import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolNetflowChangeTfsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interval: int = dataclasses.field(metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowChangeTfsRequest:
    path_params: ProtocolNetflowChangeTfsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowChangeTfsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_netflow_change_tfs_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

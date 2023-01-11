import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolNetflowChangeDfsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interval: int = dataclasses.field(metadata={'path_param': { 'field_name': 'interval', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowChangeDfsRequest:
    path_params: ProtocolNetflowChangeDfsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowChangeDfsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_netflow_change_dfs_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

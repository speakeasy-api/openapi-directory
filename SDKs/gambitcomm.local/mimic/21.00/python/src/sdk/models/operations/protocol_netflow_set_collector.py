import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolNetflowSetCollectorPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    collector_ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collectorIP', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowSetCollectorRequest:
    path_params: ProtocolNetflowSetCollectorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowSetCollectorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_netflow_set_collector_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

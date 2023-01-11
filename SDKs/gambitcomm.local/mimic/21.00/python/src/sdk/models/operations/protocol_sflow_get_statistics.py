import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSflowGetStatisticsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSflowGetStatisticsRequest:
    path_params: ProtocolSflowGetStatisticsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSflowGetStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_sflow_get_statistics_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    

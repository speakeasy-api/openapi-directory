import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolDhcpGetStatisticsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolDhcpGetStatisticsRequest:
    path_params: ProtocolDhcpGetStatisticsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolDhcpGetStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_dhcp_get_statistics_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    

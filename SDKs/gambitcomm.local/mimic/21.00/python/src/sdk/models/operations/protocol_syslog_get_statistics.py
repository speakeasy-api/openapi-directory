import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSyslogGetStatisticsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSyslogGetStatisticsRequest:
    path_params: ProtocolSyslogGetStatisticsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSyslogGetStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_syslog_get_statistics_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolTftpGetStatisticsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTftpGetStatisticsRequest:
    path_params: ProtocolTftpGetStatisticsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTftpGetStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_tftp_get_statistics_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    

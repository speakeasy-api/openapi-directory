import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetStatisticsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStatisticsRequest:
    path_params: GetStatisticsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_statistics_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    

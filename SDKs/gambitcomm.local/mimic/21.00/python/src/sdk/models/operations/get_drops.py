import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDropsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDropsRequest:
    path_params: GetDropsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDropsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_drops_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

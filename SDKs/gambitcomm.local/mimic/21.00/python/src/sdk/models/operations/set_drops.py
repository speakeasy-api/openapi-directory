import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetDropsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    drops: int = dataclasses.field(metadata={'path_param': { 'field_name': 'drops', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetDropsRequest:
    path_params: SetDropsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetDropsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_drops_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetInformTimeoutPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInformTimeoutRequest:
    path_params: GetInformTimeoutPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInformTimeoutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_inform_timeout_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

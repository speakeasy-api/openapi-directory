import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetInformTimeoutPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    inform_timeout: int = dataclasses.field(metadata={'path_param': { 'field_name': 'inform_timeout', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetInformTimeoutRequest:
    path_params: SetInformTimeoutPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetInformTimeoutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_inform_timeout_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

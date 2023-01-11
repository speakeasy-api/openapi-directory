import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetPdusizePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    pdusize: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pdusize', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetPdusizeRequest:
    path_params: SetPdusizePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetPdusizeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_pdusize_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

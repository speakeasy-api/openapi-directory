import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPdusizePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPdusizeRequest:
    path_params: GetPdusizePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPdusizeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pdusize_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

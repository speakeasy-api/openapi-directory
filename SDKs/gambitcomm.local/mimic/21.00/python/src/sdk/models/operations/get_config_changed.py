import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetConfigChangedPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConfigChangedRequest:
    path_params: GetConfigChangedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConfigChangedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_config_changed_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

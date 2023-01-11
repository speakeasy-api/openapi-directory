import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetChangedPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChangedRequest:
    path_params: GetChangedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChangedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_changed_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

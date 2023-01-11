import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetNumberStartsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNumberStartsRequest:
    path_params: GetNumberStartsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNumberStartsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_number_starts_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

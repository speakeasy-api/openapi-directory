import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTraceRequest:
    path_params: GetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_trace_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

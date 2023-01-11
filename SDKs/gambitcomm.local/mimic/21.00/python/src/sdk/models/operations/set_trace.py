import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    trace: int = dataclasses.field(metadata={'path_param': { 'field_name': 'trace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetTraceRequest:
    path_params: SetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_trace_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    

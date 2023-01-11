import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolIpmiSetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    enable_or_not: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enableOrNot', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolIpmiSetTraceRequest:
    path_params: ProtocolIpmiSetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolIpmiSetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_ipmi_set_trace_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

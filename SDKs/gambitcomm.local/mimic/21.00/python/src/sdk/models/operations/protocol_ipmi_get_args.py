import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProtocolIpmiGetArgsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolIpmiGetArgsRequest:
    path_params: ProtocolIpmiGetArgsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolIpmiGetArgsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_ipmi_get_args_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolIpmiGetAttrPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolIpmiGetAttrRequest:
    path_params: ProtocolIpmiGetAttrPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolIpmiGetAttrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_ipmi_get_attr_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

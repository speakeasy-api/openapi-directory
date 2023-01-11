import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSyslogSetAttrPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    value: str = dataclasses.field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSyslogSetAttrRequest:
    path_params: ProtocolSyslogSetAttrPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSyslogSetAttrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_syslog_set_attr_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

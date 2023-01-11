import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolSyslogSetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = dataclasses.field(metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = dataclasses.field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSyslogSetConfigRequest:
    path_params: ProtocolSyslogSetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSyslogSetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_syslog_set_config_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

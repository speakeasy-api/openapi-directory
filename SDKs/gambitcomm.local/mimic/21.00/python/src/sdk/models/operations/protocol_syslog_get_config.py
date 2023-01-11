import dataclasses
from typing import Optional
from ..shared import configsyslog as shared_configsyslog


@dataclasses.dataclass
class ProtocolSyslogGetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSyslogGetConfigRequest:
    path_params: ProtocolSyslogGetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSyslogGetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_syslog: Optional[shared_configsyslog.ConfigSyslog] = dataclasses.field(default=None)
    

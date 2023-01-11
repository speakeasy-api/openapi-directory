import dataclasses
from typing import Optional
from ..shared import configtftp as shared_configtftp


@dataclasses.dataclass
class ProtocolTftpGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTftpGetTraceRequest:
    path_params: ProtocolTftpGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTftpGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_tftp: Optional[shared_configtftp.ConfigTftp] = dataclasses.field(default=None)
    

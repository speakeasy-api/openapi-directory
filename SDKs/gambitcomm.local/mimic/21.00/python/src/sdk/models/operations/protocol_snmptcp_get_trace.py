import dataclasses
from typing import Optional
from ..shared import configsnmptcp as shared_configsnmptcp


@dataclasses.dataclass
class ProtocolSnmptcpGetTracePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmptcpGetTraceRequest:
    path_params: ProtocolSnmptcpGetTracePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmptcpGetTraceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_snmptcp: Optional[shared_configsnmptcp.ConfigSnmptcp] = dataclasses.field(default=None)
    

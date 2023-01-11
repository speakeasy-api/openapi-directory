import dataclasses
from typing import Optional
from ..shared import ipalias as shared_ipalias


@dataclasses.dataclass
class ProtocolSnmptcpIpaliasListPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolSnmptcpIpaliasListRequest:
    path_params: ProtocolSnmptcpIpaliasListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolSnmptcpIpaliasListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_aliases: Optional[list[shared_ipalias.IPAlias]] = dataclasses.field(default=None)
    

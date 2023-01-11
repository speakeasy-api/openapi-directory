import dataclasses
from typing import Optional
from ..shared import ipalias as shared_ipalias


@dataclasses.dataclass
class ListIpaliasesPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListIpaliasesRequest:
    path_params: ListIpaliasesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListIpaliasesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_aliases: Optional[list[shared_ipalias.IPAlias]] = dataclasses.field(default=None)
    

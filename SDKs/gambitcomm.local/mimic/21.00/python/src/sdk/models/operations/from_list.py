import dataclasses
from typing import Optional
from ..shared import ipsource as shared_ipsource


@dataclasses.dataclass
class FromListPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FromListRequest:
    path_params: FromListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FromListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_sources: Optional[list[shared_ipsource.IPSource]] = dataclasses.field(default=None)
    

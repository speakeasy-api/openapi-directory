import dataclasses
from typing import Optional
from ..shared import triplet as shared_triplet


@dataclasses.dataclass
class GetMibsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMibsRequest:
    path_params: GetMibsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMibsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    triplets: Optional[list[shared_triplet.Triplet]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import triplet as shared_triplet


@dataclasses.dataclass
class SetMibsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetMibsRequest:
    path_params: SetMibsPathParams = dataclasses.field()
    request: list[shared_triplet.Triplet] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetMibsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_mibs_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

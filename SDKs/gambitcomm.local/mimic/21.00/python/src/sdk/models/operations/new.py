import dataclasses
from typing import Optional
from ..shared import triplet as shared_triplet


@dataclasses.dataclass
class NewPathParams:
    ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NewRequest:
    path_params: NewPathParams = dataclasses.field()
    request: list[shared_triplet.Triplet] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    new_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

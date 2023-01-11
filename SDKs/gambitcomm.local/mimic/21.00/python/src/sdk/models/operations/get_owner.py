import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOwnerPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOwnerRequest:
    path_params: GetOwnerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOwnerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_owner_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

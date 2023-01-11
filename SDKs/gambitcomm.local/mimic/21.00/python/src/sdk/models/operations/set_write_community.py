import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetWriteCommunityPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    write: str = dataclasses.field(metadata={'path_param': { 'field_name': 'write', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetWriteCommunityRequest:
    path_params: SetWriteCommunityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetWriteCommunityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_write_community_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

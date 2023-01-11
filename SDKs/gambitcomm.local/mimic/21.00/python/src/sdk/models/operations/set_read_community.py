import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetReadCommunityPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    read: str = dataclasses.field(metadata={'path_param': { 'field_name': 'read', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetReadCommunityRequest:
    path_params: SetReadCommunityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetReadCommunityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_read_community_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

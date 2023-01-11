import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetReadCommunityPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReadCommunityRequest:
    path_params: GetReadCommunityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReadCommunityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_read_community_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

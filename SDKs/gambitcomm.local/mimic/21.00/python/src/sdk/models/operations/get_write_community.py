import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetWriteCommunityPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWriteCommunityRequest:
    path_params: GetWriteCommunityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWriteCommunityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_write_community_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

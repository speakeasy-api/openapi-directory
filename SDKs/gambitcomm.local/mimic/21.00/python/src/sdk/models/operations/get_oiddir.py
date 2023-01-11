import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOiddirPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOiddirRequest:
    path_params: GetOiddirPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOiddirResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_oiddir_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

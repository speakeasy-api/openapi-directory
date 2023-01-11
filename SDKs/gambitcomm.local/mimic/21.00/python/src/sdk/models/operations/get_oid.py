import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOidPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOidRequest:
    path_params: GetOidPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOidResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_oid_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

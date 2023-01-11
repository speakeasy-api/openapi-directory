import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetNamePathParams:
    oid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'OID', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNameRequest:
    path_params: GetNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_name_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

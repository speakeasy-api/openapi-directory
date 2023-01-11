import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPortPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPortRequest:
    path_params: GetPortPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_port_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

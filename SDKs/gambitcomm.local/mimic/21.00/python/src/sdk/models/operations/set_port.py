import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetPortPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetPortRequest:
    path_params: SetPortPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetPortResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_port_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

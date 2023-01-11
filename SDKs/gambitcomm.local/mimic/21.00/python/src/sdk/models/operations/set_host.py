import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetHostPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    host: str = dataclasses.field(metadata={'path_param': { 'field_name': 'host', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetHostRequest:
    path_params: SetHostPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetHostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_host_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

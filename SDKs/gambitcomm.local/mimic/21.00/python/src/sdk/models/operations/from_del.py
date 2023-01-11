import dataclasses
from typing import Optional


@dataclasses.dataclass
class FromDelPathParams:
    ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FromDelRequest:
    path_params: FromDelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FromDelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    from_del_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

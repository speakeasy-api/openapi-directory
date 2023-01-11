import dataclasses
from typing import Optional


@dataclasses.dataclass
class StatusIpaliasPathParams:
    ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StatusIpaliasRequest:
    path_params: StatusIpaliasPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StatusIpaliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    status_ipalias_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

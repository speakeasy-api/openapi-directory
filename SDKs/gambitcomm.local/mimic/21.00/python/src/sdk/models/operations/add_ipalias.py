import dataclasses
from typing import Optional


@dataclasses.dataclass
class AddIpaliasPathParams:
    ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interface: str = dataclasses.field(metadata={'path_param': { 'field_name': 'interface', 'style': 'simple', 'explode': False }})
    mask: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mask', 'style': 'simple', 'explode': False }})
    port: int = dataclasses.field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddIpaliasRequest:
    path_params: AddIpaliasPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AddIpaliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_ipalias_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

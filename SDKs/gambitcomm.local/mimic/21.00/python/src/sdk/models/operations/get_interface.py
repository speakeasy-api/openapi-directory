import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetInterfacePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInterfaceRequest:
    path_params: GetInterfacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_interface_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

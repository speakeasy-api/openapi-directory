import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetInterfacePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interface: str = dataclasses.field(metadata={'path_param': { 'field_name': 'interface', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetInterfaceRequest:
    path_params: SetInterfacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_interface_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

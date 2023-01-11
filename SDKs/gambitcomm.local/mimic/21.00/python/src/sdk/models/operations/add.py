import dataclasses
from typing import Optional


@dataclasses.dataclass
class AddPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    instance: str = dataclasses.field(metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddRequest:
    path_params: AddPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

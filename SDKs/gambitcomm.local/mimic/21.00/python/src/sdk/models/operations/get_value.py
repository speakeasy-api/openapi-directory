import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetValuePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    instance: str = dataclasses.field(metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    variable: str = dataclasses.field(metadata={'path_param': { 'field_name': 'variable', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetValueRequest:
    path_params: GetValuePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetValueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_value_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

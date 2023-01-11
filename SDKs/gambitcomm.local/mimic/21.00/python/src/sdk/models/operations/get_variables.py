import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetVariablesPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    instance: str = dataclasses.field(metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVariablesRequest:
    path_params: GetVariablesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVariablesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_variables_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    

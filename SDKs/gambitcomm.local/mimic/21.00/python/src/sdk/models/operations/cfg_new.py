import dataclasses
from typing import Optional


@dataclasses.dataclass
class CfgNewPathParams:
    first_agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'firstAgentNum', 'style': 'simple', 'explode': False }})
    last_agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'lastAgentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CfgNewRequest:
    path_params: CfgNewPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CfgNewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cfg_new_200_application_json_object: Optional[dict[str, int]] = dataclasses.field(default=None)
    

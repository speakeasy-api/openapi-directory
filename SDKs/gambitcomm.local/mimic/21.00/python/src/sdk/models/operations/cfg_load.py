import dataclasses
from typing import Optional


@dataclasses.dataclass
class CfgLoadPathParams:
    cfg_file: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cfgFile', 'style': 'simple', 'explode': False }})
    first_agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'firstAgentNum', 'style': 'simple', 'explode': False }})
    last_agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'lastAgentNum', 'style': 'simple', 'explode': False }})
    start_agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'startAgentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CfgLoadRequest:
    path_params: CfgLoadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CfgLoadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cfg_load_200_application_json_object: Optional[dict[str, int]] = dataclasses.field(default=None)
    

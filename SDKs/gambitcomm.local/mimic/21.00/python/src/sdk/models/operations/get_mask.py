import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMaskPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMaskRequest:
    path_params: GetMaskPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_mask_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

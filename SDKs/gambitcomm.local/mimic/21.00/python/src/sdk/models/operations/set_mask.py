import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetMaskPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    mask: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mask', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetMaskRequest:
    path_params: SetMaskPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetMaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_mask_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

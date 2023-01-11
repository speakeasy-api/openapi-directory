import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetPrivdirPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    privdir: str = dataclasses.field(metadata={'path_param': { 'field_name': 'privdir', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetPrivdirRequest:
    path_params: SetPrivdirPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetPrivdirResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_privdir_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

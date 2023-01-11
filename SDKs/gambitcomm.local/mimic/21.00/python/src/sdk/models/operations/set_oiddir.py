import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetOiddirPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    oiddir: str = dataclasses.field(metadata={'path_param': { 'field_name': 'oiddir', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetOiddirRequest:
    path_params: SetOiddirPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SetOiddirResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_oiddir_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

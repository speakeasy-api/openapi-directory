import dataclasses
from typing import Optional


@dataclasses.dataclass
class ReloadPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReloadRequest:
    path_params: ReloadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reload_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

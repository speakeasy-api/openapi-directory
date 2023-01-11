import dataclasses
from typing import Optional


@dataclasses.dataclass
class SavePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SaveRequest:
    path_params: SavePathParams = dataclasses.field()
    

@dataclasses.dataclass
class SaveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    save_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

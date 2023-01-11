import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetProtocolsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetProtocolsRequest:
    path_params: SetProtocolsPathParams = dataclasses.field()
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetProtocolsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_protocols_200_application_json_string_integers: Optional[list[int]] = dataclasses.field(default=None)
    

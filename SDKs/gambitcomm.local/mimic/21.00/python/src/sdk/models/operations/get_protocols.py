import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetProtocolsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProtocolsRequest:
    path_params: GetProtocolsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProtocolsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_protocols_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    

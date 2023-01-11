import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProtocolTodGetArgsPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolTodGetArgsRequest:
    path_params: ProtocolTodGetArgsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolTodGetArgsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_tod_get_args_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

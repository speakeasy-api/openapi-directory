import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProtocolGetConfigPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    prot: str = dataclasses.field(metadata={'path_param': { 'field_name': 'prot', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolGetConfigRequest:
    path_params: ProtocolGetConfigPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolGetConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_get_config_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

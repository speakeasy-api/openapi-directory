import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ProtocolNetflowListPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowListRequest:
    path_params: ProtocolNetflowListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_netflow_list_200_application_json_objects: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    

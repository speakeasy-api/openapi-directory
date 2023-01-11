import dataclasses
from typing import Optional


@dataclasses.dataclass
class ProtocolNetflowSetFileNamePathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    file_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProtocolNetflowSetFileNameRequest:
    path_params: ProtocolNetflowSetFileNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProtocolNetflowSetFileNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protocol_netflow_set_file_name_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    

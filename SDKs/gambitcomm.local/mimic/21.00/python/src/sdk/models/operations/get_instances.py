import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetInstancesPathParams:
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInstancesRequest:
    path_params: GetInstancesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_instances_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    

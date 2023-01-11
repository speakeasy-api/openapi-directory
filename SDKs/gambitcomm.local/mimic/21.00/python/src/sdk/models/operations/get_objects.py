import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetObjectsPathParams:
    oid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'OID', 'style': 'simple', 'explode': False }})
    agent_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetObjectsRequest:
    path_params: GetObjectsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetObjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_objects_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    

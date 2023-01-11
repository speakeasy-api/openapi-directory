import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAgentsPathParams:
    runmode: str = dataclasses.field(metadata={'path_param': { 'field_name': 'runmode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentsRequest:
    path_params: GetAgentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_agents_default_application_json_string: Optional[str] = dataclasses.field(default=None)
    

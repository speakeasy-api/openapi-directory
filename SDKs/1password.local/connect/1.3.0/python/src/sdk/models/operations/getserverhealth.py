import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicedependency as shared_servicedependency


GET_SERVER_HEALTH_SERVERS = [
	"http://localhost:8080",
]


@dataclass_json
@dataclasses.dataclass
class GetServerHealth200ApplicationJSON:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    dependencies: Optional[list[shared_servicedependency.ServiceDependency]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencies') }})
    

@dataclasses.dataclass
class GetServerHealthRequest:
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetServerHealthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_server_health_200_application_json_object: Optional[GetServerHealth200ApplicationJSON] = dataclasses.field(default=None)
    

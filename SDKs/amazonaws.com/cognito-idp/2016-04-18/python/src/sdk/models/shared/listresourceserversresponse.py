import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceservertype as shared_resourceservertype


@dataclass_json
@dataclasses.dataclass
class ListResourceServersResponse:
    resource_servers: list[shared_resourceservertype.ResourceServerType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceServers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

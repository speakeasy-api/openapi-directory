import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import server as shared_server


@dataclass_json
@dataclasses.dataclass
class ServerGroup:
    r"""ServerGroup
    Logical grouping of servers.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupId') }})
    server_list: Optional[list[shared_server.Server]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverList') }})
    

import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servertype_enum as shared_servertype_enum
from ..shared import vmserver as shared_vmserver


@dataclass_json
@dataclasses.dataclass
class Server:
    r"""Server
    Represents a server.
    """
    
    replication_job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationJobId') }})
    replication_job_terminated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationJobTerminated') }})
    server_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverId') }})
    server_type: Optional[shared_servertype_enum.ServerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverType') }})
    vm_server: Optional[shared_vmserver.VMServer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmServer') }})
    

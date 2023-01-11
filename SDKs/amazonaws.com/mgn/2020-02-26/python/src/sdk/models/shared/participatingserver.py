import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import launchstatus_enum as shared_launchstatus_enum


@dataclass_json
@dataclasses.dataclass
class ParticipatingServer:
    r"""ParticipatingServer
    Server participating in Job.
    """
    
    launch_status: Optional[shared_launchstatus_enum.LaunchStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStatus') }})
    source_server_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceServerID') }})
    

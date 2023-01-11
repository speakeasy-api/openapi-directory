import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationtask as shared_replicationtask


@dataclass_json
@dataclasses.dataclass
class StartReplicationTaskResponse:
    r"""StartReplicationTaskResponse
    <p/>
    """
    
    replication_task: Optional[shared_replicationtask.ReplicationTask] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTask') }})
    

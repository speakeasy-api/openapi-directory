import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationjob as shared_replicationjob
from ..shared import replicationrun as shared_replicationrun


@dataclass_json
@dataclasses.dataclass
class GetReplicationRunsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    replication_job: Optional[shared_replicationjob.ReplicationJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationJob') }})
    replication_run_list: Optional[list[shared_replicationrun.ReplicationRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationRunList') }})
    

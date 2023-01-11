import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationjob as shared_replicationjob


@dataclass_json
@dataclasses.dataclass
class GetReplicationJobsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    replication_job_list: Optional[list[shared_replicationjob.ReplicationJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationJobList') }})
    

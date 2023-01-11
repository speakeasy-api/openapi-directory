import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationinstancetasklog as shared_replicationinstancetasklog


@dataclass_json
@dataclasses.dataclass
class DescribeReplicationInstanceTaskLogsResponse:
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_instance_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceArn') }})
    replication_instance_task_logs: Optional[list[shared_replicationinstancetasklog.ReplicationInstanceTaskLog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationInstanceTaskLogs') }})
    

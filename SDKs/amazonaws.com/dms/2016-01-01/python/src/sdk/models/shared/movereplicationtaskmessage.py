import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MoveReplicationTaskMessage:
    r"""MoveReplicationTaskMessage
    <p/>
    """
    
    replication_task_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    target_replication_instance_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetReplicationInstanceArn') }})
    

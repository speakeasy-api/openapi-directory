import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteReplicationTaskAssessmentRunMessage:
    r"""DeleteReplicationTaskAssessmentRunMessage
    <p/>
    """
    
    replication_task_assessment_run_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskAssessmentRunArn') }})
    

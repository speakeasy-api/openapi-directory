import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationtaskassessmentrun as shared_replicationtaskassessmentrun


@dataclass_json
@dataclasses.dataclass
class DeleteReplicationTaskAssessmentRunResponse:
    r"""DeleteReplicationTaskAssessmentRunResponse
    <p/>
    """
    
    replication_task_assessment_run: Optional[shared_replicationtaskassessmentrun.ReplicationTaskAssessmentRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskAssessmentRun') }})
    

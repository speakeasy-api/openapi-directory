import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationtaskassessmentrun as shared_replicationtaskassessmentrun


@dataclass_json
@dataclasses.dataclass
class DescribeReplicationTaskAssessmentRunsResponse:
    r"""DescribeReplicationTaskAssessmentRunsResponse
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_task_assessment_runs: Optional[list[shared_replicationtaskassessmentrun.ReplicationTaskAssessmentRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskAssessmentRuns') }})
    

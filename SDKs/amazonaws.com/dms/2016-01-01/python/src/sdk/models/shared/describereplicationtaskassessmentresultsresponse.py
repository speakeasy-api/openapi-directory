import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationtaskassessmentresult as shared_replicationtaskassessmentresult


@dataclass_json
@dataclasses.dataclass
class DescribeReplicationTaskAssessmentResultsResponse:
    r"""DescribeReplicationTaskAssessmentResultsResponse
    <p/>
    """
    
    bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_task_assessment_results: Optional[list[shared_replicationtaskassessmentresult.ReplicationTaskAssessmentResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskAssessmentResults') }})
    

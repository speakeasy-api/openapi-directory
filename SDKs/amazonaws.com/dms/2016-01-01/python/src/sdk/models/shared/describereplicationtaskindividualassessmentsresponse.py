import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationtaskindividualassessment as shared_replicationtaskindividualassessment


@dataclass_json
@dataclasses.dataclass
class DescribeReplicationTaskIndividualAssessmentsResponse:
    r"""DescribeReplicationTaskIndividualAssessmentsResponse
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    replication_task_individual_assessments: Optional[list[shared_replicationtaskindividualassessment.ReplicationTaskIndividualAssessment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskIndividualAssessments') }})
    

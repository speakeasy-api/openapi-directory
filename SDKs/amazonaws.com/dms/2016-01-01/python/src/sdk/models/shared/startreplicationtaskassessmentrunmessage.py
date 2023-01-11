import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartReplicationTaskAssessmentRunMessage:
    r"""StartReplicationTaskAssessmentRunMessage
    <p/>
    """
    
    assessment_run_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssessmentRunName') }})
    replication_task_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    result_location_bucket: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultLocationBucket') }})
    service_access_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceAccessRoleArn') }})
    exclude: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Exclude') }})
    include_only: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeOnly') }})
    result_encryption_mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultEncryptionMode') }})
    result_kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultKmsKeyArn') }})
    result_location_folder: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultLocationFolder') }})
    

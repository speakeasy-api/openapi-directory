import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canarycodeoutput as shared_canarycodeoutput
from ..shared import canaryrunconfigoutput as shared_canaryrunconfigoutput
from ..shared import canaryscheduleoutput as shared_canaryscheduleoutput
from ..shared import canarystatus as shared_canarystatus
from ..shared import canarytimeline as shared_canarytimeline
from ..shared import visualreferenceoutput as shared_visualreferenceoutput
from ..shared import vpcconfigoutput as shared_vpcconfigoutput


@dataclass_json
@dataclasses.dataclass
class Canary:
    r"""Canary
    This structure contains all information about one canary in your account.
    """
    
    artifact_s3_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactS3Location') }})
    code: Optional[shared_canarycodeoutput.CanaryCodeOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    engine_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineArn') }})
    execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    failure_retention_period_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureRetentionPeriodInDays') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    run_config: Optional[shared_canaryrunconfigoutput.CanaryRunConfigOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunConfig') }})
    runtime_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeVersion') }})
    schedule: Optional[shared_canaryscheduleoutput.CanaryScheduleOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    status: Optional[shared_canarystatus.CanaryStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    success_retention_period_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessRetentionPeriodInDays') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    timeline: Optional[shared_canarytimeline.CanaryTimeline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeline') }})
    visual_reference: Optional[shared_visualreferenceoutput.VisualReferenceOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VisualReference') }})
    vpc_config: Optional[shared_vpcconfigoutput.VpcConfigOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    

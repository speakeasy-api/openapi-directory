import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentreportsdestination as shared_assessmentreportsdestination
from ..shared import role as shared_role


@dataclass_json
@dataclasses.dataclass
class Settings:
    r"""Settings
     The settings object that holds all supported Audit Manager settings. 
    """
    
    default_assessment_reports_destination: Optional[shared_assessmentreportsdestination.AssessmentReportsDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAssessmentReportsDestination') }})
    default_process_owners: Optional[list[shared_role.Role]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultProcessOwners') }})
    is_aws_org_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAwsOrgEnabled') }})
    kms_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    sns_topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsTopic') }})
    

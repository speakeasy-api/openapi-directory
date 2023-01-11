import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentrunnotification as shared_assessmentrunnotification
from ..shared import assessmentrunstate_enum as shared_assessmentrunstate_enum
from ..shared import assessmentrunstatechange as shared_assessmentrunstatechange
from ..shared import attribute as shared_attribute


@dataclass_json
@dataclasses.dataclass
class AssessmentRun:
    r"""AssessmentRun
    <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    assessment_template_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTemplateArn') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_collected: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCollected') }})
    duration_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInSeconds') }})
    finding_counts: dict[str, int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingCounts') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notifications: list[shared_assessmentrunnotification.AssessmentRunNotification] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    rules_package_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    state: shared_assessmentrunstate_enum.AssessmentRunStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_changed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_changes: list[shared_assessmentrunstatechange.AssessmentRunStateChange] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChanges') }})
    user_attributes_for_findings: list[shared_attribute.Attribute] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributesForFindings') }})
    completed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    started_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

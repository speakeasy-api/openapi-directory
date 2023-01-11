import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inspectorevent_enum as shared_inspectorevent_enum
from ..shared import assessmentrunnotificationsnsstatuscode_enum as shared_assessmentrunnotificationsnsstatuscode_enum


@dataclass_json
@dataclasses.dataclass
class AssessmentRunNotification:
    r"""AssessmentRunNotification
    Used as one of the elements of the <a>AssessmentRun</a> data type.
    """
    
    date_: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    event: shared_inspectorevent_enum.InspectorEventEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    sns_publish_status_code: Optional[shared_assessmentrunnotificationsnsstatuscode_enum.AssessmentRunNotificationSnsStatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsPublishStatusCode') }})
    sns_topic_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snsTopicArn') }})
    

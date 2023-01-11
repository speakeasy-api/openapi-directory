import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detailtype_enum as shared_detailtype_enum
from ..shared import eventtypesummary as shared_eventtypesummary
from ..shared import notificationrulestatus_enum as shared_notificationrulestatus_enum
from ..shared import targetsummary as shared_targetsummary


@dataclass_json
@dataclasses.dataclass
class DescribeNotificationRuleResult:
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    created_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detail_type: Optional[shared_detailtype_enum.DetailTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetailType') }})
    event_types: Optional[list[shared_eventtypesummary.EventTypeSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTypes') }})
    last_modified_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    status: Optional[shared_notificationrulestatus_enum.NotificationRuleStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    targets: Optional[list[shared_targetsummary.TargetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitytype as shared_activitytype
from ..shared import registrationstatus_enum as shared_registrationstatus_enum


@dataclass_json
@dataclasses.dataclass
class ActivityTypeInfo:
    r"""ActivityTypeInfo
    Detailed information about an activity type.
    """
    
    activity_type: shared_activitytype.ActivityType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    creation_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: shared_registrationstatus_enum.RegistrationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    deprecation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

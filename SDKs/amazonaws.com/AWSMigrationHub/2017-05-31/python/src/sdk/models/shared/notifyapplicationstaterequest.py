import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationstatus_enum as shared_applicationstatus_enum


@dataclass_json
@dataclasses.dataclass
class NotifyApplicationStateRequest:
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    status: shared_applicationstatus_enum.ApplicationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    update_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import diagnostics as shared_diagnostics
from ..shared import lifecycleeventstatus_enum as shared_lifecycleeventstatus_enum


@dataclass_json
@dataclasses.dataclass
class LifecycleEvent:
    r"""LifecycleEvent
    Information about a deployment lifecycle event.
    """
    
    diagnostics: Optional[shared_diagnostics.Diagnostics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnostics') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_event_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleEventName') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_lifecycleeventstatus_enum.LifecycleEventStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

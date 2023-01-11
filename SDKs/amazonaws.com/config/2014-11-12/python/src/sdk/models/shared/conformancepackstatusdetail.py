import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackstate_enum as shared_conformancepackstate_enum


@dataclass_json
@dataclasses.dataclass
class ConformancePackStatusDetail:
    r"""ConformancePackStatusDetail
    Status details of a conformance pack.
    """
    
    conformance_pack_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackArn') }})
    conformance_pack_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackId') }})
    conformance_pack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    conformance_pack_state: shared_conformancepackstate_enum.ConformancePackStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackState') }})
    last_update_requested_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateRequestedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stack_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackArn') }})
    conformance_pack_status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackStatusReason') }})
    last_update_completed_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateCompletedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

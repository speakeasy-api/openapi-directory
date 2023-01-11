import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attacheddisk as shared_attacheddisk
from ..shared import autosnapshotstatus_enum as shared_autosnapshotstatus_enum


@dataclass_json
@dataclasses.dataclass
class AutoSnapshotDetails:
    r"""AutoSnapshotDetails
    Describes an automatic snapshot.
    """
    
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    from_attached_disks: Optional[list[shared_attacheddisk.AttachedDisk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromAttachedDisks') }})
    status: Optional[shared_autosnapshotstatus_enum.AutoSnapshotStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

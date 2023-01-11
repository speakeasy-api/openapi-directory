import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addonrequest as shared_addonrequest
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateDiskFromSnapshotRequest:
    availability_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    disk_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskName') }})
    size_in_gb: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInGb') }})
    add_ons: Optional[list[shared_addonrequest.AddOnRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOns') }})
    disk_snapshot_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSnapshotName') }})
    restore_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreDate') }})
    source_disk_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDiskName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    use_latest_restorable_auto_snapshot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLatestRestorableAutoSnapshot') }})
    

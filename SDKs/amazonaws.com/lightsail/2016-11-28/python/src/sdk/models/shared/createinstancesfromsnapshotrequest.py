import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addonrequest as shared_addonrequest
from ..shared import diskmap as shared_diskmap
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateInstancesFromSnapshotRequest:
    availability_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    bundle_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    instance_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    add_ons: Optional[list[shared_addonrequest.AddOnRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOns') }})
    attached_disk_mapping: Optional[dict[str, list[shared_diskmap.DiskMap]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachedDiskMapping') }})
    instance_snapshot_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceSnapshotName') }})
    ip_address_type: Optional[shared_ipaddresstype_enum.IPAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddressType') }})
    key_pair_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPairName') }})
    restore_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreDate') }})
    source_instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceInstanceName') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    use_latest_restorable_auto_snapshot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLatestRestorableAutoSnapshot') }})
    user_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

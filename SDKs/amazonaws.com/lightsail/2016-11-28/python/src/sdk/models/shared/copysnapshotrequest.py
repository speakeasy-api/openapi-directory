import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regionname_enum as shared_regionname_enum


@dataclass_json
@dataclasses.dataclass
class CopySnapshotRequest:
    source_region: shared_regionname_enum.RegionNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRegion') }})
    target_snapshot_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSnapshotName') }})
    restore_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreDate') }})
    source_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceResourceName') }})
    source_snapshot_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceSnapshotName') }})
    use_latest_restorable_auto_snapshot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useLatestRestorableAutoSnapshot') }})
    

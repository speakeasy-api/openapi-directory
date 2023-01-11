import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import disksnapshotinfo as shared_disksnapshotinfo
from ..shared import instancesnapshotinfo as shared_instancesnapshotinfo
from ..shared import exportsnapshotrecordsourcetype_enum as shared_exportsnapshotrecordsourcetype_enum


@dataclass_json
@dataclasses.dataclass
class ExportSnapshotRecordSourceInfo:
    r"""ExportSnapshotRecordSourceInfo
    Describes the source of an export snapshot record.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disk_snapshot_info: Optional[shared_disksnapshotinfo.DiskSnapshotInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSnapshotInfo') }})
    from_resource_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromResourceArn') }})
    from_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromResourceName') }})
    instance_snapshot_info: Optional[shared_instancesnapshotinfo.InstanceSnapshotInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceSnapshotInfo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[shared_exportsnapshotrecordsourcetype_enum.ExportSnapshotRecordSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    

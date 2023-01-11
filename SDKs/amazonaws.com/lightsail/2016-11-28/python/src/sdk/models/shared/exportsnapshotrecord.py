import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationinfo as shared_destinationinfo
from ..shared import resourcelocation as shared_resourcelocation
from ..shared import resourcetype_enum as shared_resourcetype_enum
from ..shared import exportsnapshotrecordsourceinfo as shared_exportsnapshotrecordsourceinfo
from ..shared import recordstate_enum as shared_recordstate_enum


@dataclass_json
@dataclasses.dataclass
class ExportSnapshotRecord:
    r"""ExportSnapshotRecord
    Describes an export snapshot record.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination_info: Optional[shared_destinationinfo.DestinationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationInfo') }})
    location: Optional[shared_resourcelocation.ResourceLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[shared_resourcetype_enum.ResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    source_info: Optional[shared_exportsnapshotrecordsourceinfo.ExportSnapshotRecordSourceInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceInfo') }})
    state: Optional[shared_recordstate_enum.RecordStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshotstatus_enum as shared_snapshotstatus_enum


@dataclass_json
@dataclasses.dataclass
class SnapshotDetails:
    r"""SnapshotDetails
    Provides details about a snapshot of application state.
    """
    
    application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    snapshot_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotName') }})
    snapshot_status: shared_snapshotstatus_enum.SnapshotStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotStatus') }})
    snapshot_creation_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotCreationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

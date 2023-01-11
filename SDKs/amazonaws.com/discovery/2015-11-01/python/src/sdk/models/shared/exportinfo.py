import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportstatus_enum as shared_exportstatus_enum


@dataclass_json
@dataclasses.dataclass
class ExportInfo:
    r"""ExportInfo
    Information regarding the export status of discovered data. The value is an array of objects.
    """
    
    export_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportId') }})
    export_request_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportRequestTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    export_status: shared_exportstatus_enum.ExportStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportStatus') }})
    status_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    configurations_download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationsDownloadUrl') }})
    is_truncated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTruncated') }})
    requested_end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requested_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

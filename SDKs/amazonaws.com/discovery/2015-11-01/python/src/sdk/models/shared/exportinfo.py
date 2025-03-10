"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import exportstatus_enum as shared_exportstatus_enum
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ExportInfo:
    r"""Information regarding the export status of discovered data. The value is an array of objects."""
    
    export_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('exportId') }})  
    export_request_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('exportRequestTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    export_status: shared_exportstatus_enum.ExportStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('exportStatus') }})  
    status_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('statusMessage') }})  
    configurations_download_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('configurationsDownloadUrl'), 'exclude': lambda f: f is None }})  
    is_truncated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isTruncated'), 'exclude': lambda f: f is None }})  
    requested_end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestedEndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    requested_start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestedStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    
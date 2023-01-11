import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uploadstatus_enum as shared_uploadstatus_enum


@dataclass_json
@dataclasses.dataclass
class GetUploadStatusResponse:
    created_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    upload_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadId') }})
    upload_status: shared_uploadstatus_enum.UploadStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadStatus') }})
    failure_reason: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    namespace_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceArn') }})
    namespace_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    namespace_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceVersion') }})
    

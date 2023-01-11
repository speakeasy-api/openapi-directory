import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesspreviewstatus_enum as shared_accesspreviewstatus_enum
from ..shared import accesspreviewstatusreason as shared_accesspreviewstatusreason


@dataclass_json
@dataclasses.dataclass
class AccessPreviewSummary:
    r"""AccessPreviewSummary
    Contains a summary of information about an access preview.
    """
    
    analyzer_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzerArn') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: shared_accesspreviewstatus_enum.AccessPreviewStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[shared_accesspreviewstatusreason.AccessPreviewStatusReason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import worldgenerationjoberrorcode_enum as shared_worldgenerationjoberrorcode_enum
from ..shared import finishedworldssummary as shared_finishedworldssummary
from ..shared import worldgenerationjobstatus_enum as shared_worldgenerationjobstatus_enum
from ..shared import worldcount as shared_worldcount


@dataclass_json
@dataclasses.dataclass
class DescribeWorldGenerationJobResponse:
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    client_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_code: Optional[shared_worldgenerationjoberrorcode_enum.WorldGenerationJobErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    finished_worlds_summary: Optional[shared_finishedworldssummary.FinishedWorldsSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishedWorldsSummary') }})
    status: Optional[shared_worldgenerationjobstatus_enum.WorldGenerationJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    world_count: Optional[shared_worldcount.WorldCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('worldCount') }})
    world_tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('worldTags') }})
    

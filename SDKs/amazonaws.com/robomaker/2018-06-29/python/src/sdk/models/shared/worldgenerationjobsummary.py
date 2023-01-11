import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import worldgenerationjobstatus_enum as shared_worldgenerationjobstatus_enum
from ..shared import worldcount as shared_worldcount


@dataclass_json
@dataclasses.dataclass
class WorldGenerationJobSummary:
    r"""WorldGenerationJobSummary
    Information about a world generator job.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failed_world_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedWorldCount') }})
    status: Optional[shared_worldgenerationjobstatus_enum.WorldGenerationJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    succeeded_world_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeededWorldCount') }})
    template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    world_count: Optional[shared_worldcount.WorldCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('worldCount') }})
    

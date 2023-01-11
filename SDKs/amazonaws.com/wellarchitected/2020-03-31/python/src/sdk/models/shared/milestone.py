import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workload as shared_workload


@dataclass_json
@dataclasses.dataclass
class Milestone:
    r"""Milestone
    A milestone return object.
    """
    
    milestone_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneName') }})
    milestone_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    recorded_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workload: Optional[shared_workload.Workload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workload') }})
    

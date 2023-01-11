import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchalarmactionerrorentry as shared_batchalarmactionerrorentry


@dataclass_json
@dataclasses.dataclass
class BatchEnableAlarmResponse:
    error_entries: Optional[list[shared_batchalarmactionerrorentry.BatchAlarmActionErrorEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorEntries') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recorddetail as shared_recorddetail


@dataclass_json
@dataclasses.dataclass
class ListRecordHistoryOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    record_details: Optional[list[shared_recorddetail.RecordDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordDetails') }})
    

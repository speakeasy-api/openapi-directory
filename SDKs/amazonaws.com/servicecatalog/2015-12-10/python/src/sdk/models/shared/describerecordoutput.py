import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recorddetail as shared_recorddetail
from ..shared import recordoutput as shared_recordoutput


@dataclass_json
@dataclasses.dataclass
class DescribeRecordOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    record_detail: Optional[shared_recorddetail.RecordDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordDetail') }})
    record_outputs: Optional[list[shared_recordoutput.RecordOutput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordOutputs') }})
    

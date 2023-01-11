import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import writerequest as shared_writerequest


@dataclass_json
@dataclasses.dataclass
class BatchWriteItemInput:
    request_items: dict[str, list[shared_writerequest.WriteRequest]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestItems') }})
    

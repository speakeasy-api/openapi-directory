import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import putrecordbatchresponseentry as shared_putrecordbatchresponseentry


@dataclass_json
@dataclasses.dataclass
class PutRecordBatchOutput:
    failed_put_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedPutCount') }})
    request_responses: list[shared_putrecordbatchresponseentry.PutRecordBatchResponseEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestResponses') }})
    encrypted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    

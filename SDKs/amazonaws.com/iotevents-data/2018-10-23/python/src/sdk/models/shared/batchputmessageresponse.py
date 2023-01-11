import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchputmessageerrorentry as shared_batchputmessageerrorentry


@dataclass_json
@dataclasses.dataclass
class BatchPutMessageResponse:
    batch_put_message_error_entries: Optional[list[shared_batchputmessageerrorentry.BatchPutMessageErrorEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchPutMessageErrorEntries') }})
    

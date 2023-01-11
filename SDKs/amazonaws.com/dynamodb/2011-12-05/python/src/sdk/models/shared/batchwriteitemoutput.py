import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchwriteresponse as shared_batchwriteresponse
from ..shared import writerequest as shared_writerequest


@dataclass_json
@dataclasses.dataclass
class BatchWriteItemOutput:
    r"""BatchWriteItemOutput
    A container for <code>BatchWriteItem</code> response
    """
    
    responses: Optional[dict[str, shared_batchwriteresponse.BatchWriteResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Responses') }})
    unprocessed_items: Optional[dict[str, list[shared_writerequest.WriteRequest]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedItems') }})
    

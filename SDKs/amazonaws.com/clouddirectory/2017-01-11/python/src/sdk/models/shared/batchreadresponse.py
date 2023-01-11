import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchreadoperationresponse as shared_batchreadoperationresponse


@dataclass_json
@dataclasses.dataclass
class BatchReadResponse:
    responses: Optional[list[shared_batchreadoperationresponse.BatchReadOperationResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Responses') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchreadexception as shared_batchreadexception
from ..shared import batchreadsuccessfulresponse as shared_batchreadsuccessfulresponse


@dataclass_json
@dataclasses.dataclass
class BatchReadOperationResponse:
    r"""BatchReadOperationResponse
    Represents the output of a <code>BatchRead</code> response operation.
    """
    
    exception_response: Optional[shared_batchreadexception.BatchReadException] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExceptionResponse') }})
    successful_response: Optional[shared_batchreadsuccessfulresponse.BatchReadSuccessfulResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessfulResponse') }})
    

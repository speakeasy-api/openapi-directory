import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deleterequest as shared_deleterequest
from ..shared import putrequest as shared_putrequest


@dataclass_json
@dataclasses.dataclass
class WriteRequest:
    r"""WriteRequest
    This structure is a Union of PutRequest and DeleteRequest. It can contain exactly one of <code>PutRequest</code> or <code>DeleteRequest</code>. Never Both. This is enforced in the code.
    """
    
    delete_request: Optional[shared_deleterequest.DeleteRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteRequest') }})
    put_request: Optional[shared_putrequest.PutRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PutRequest') }})
    

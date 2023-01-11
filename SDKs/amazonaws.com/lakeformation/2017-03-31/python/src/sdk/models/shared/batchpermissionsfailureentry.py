import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errordetail as shared_errordetail
from ..shared import batchpermissionsrequestentry as shared_batchpermissionsrequestentry


@dataclass_json
@dataclasses.dataclass
class BatchPermissionsFailureEntry:
    r"""BatchPermissionsFailureEntry
    A list of failures when performing a batch grant or batch revoke operation.
    """
    
    error: Optional[shared_errordetail.ErrorDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    request_entry: Optional[shared_batchpermissionsrequestentry.BatchPermissionsRequestEntry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestEntry') }})
    

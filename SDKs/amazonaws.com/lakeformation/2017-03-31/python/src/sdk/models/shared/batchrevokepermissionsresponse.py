import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchpermissionsfailureentry as shared_batchpermissionsfailureentry


@dataclass_json
@dataclasses.dataclass
class BatchRevokePermissionsResponse:
    failures: Optional[list[shared_batchpermissionsfailureentry.BatchPermissionsFailureEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Failures') }})
    

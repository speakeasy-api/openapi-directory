import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcekey as shared_resourcekey


@dataclass_json
@dataclasses.dataclass
class StartRemediationExecutionResponse:
    failed_items: Optional[list[shared_resourcekey.ResourceKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedItems') }})
    failure_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    

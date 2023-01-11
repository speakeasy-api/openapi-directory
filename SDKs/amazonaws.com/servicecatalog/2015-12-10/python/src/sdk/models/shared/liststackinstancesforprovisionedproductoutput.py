import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stackinstance as shared_stackinstance


@dataclass_json
@dataclasses.dataclass
class ListStackInstancesForProvisionedProductOutput:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    stack_instances: Optional[list[shared_stackinstance.StackInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackInstances') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcepolicy as shared_resourcepolicy


@dataclass_json
@dataclasses.dataclass
class PutResourcePolicyResponse:
    resource_policy: Optional[shared_resourcepolicy.ResourcePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcePolicy') }})
    

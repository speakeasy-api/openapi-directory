import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutResourcePolicyRequest:
    resource_policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourcePolicy') }})
    secret_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretId') }})
    block_public_policy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockPublicPolicy') }})
    

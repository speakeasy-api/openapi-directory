import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policy as shared_policy
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class PutPolicyRequest:
    policy: shared_policy.Policy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    tag_list: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    

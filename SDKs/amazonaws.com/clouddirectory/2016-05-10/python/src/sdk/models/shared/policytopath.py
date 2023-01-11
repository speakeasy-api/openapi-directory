import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policyattachment as shared_policyattachment


@dataclass_json
@dataclasses.dataclass
class PolicyToPath:
    r"""PolicyToPath
    Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.
    """
    
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    policies: Optional[list[shared_policyattachment.PolicyAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    

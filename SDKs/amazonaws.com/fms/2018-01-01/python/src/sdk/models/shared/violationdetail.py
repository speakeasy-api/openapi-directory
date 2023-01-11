import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import resourceviolation as shared_resourceviolation


@dataclass_json
@dataclasses.dataclass
class ViolationDetail:
    r"""ViolationDetail
    Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
    """
    
    member_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberAccount') }})
    policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    resource_violations: list[shared_resourceviolation.ResourceViolation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceViolations') }})
    resource_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceDescription') }})
    resource_tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTags') }})
    

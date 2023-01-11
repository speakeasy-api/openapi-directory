import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membership as shared_membership


@dataclass_json
@dataclasses.dataclass
class MembershipList:
    r"""MembershipList
    Memberships List
    """
    
    memberships: list[shared_membership.Membership] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    

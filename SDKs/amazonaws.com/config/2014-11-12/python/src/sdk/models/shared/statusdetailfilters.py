import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memberaccountrulestatus_enum as shared_memberaccountrulestatus_enum


@dataclass_json
@dataclasses.dataclass
class StatusDetailFilters:
    r"""StatusDetailFilters
    Status filter object to filter results based on specific member account ID or status type for an organization config rule. 
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    member_account_rule_status: Optional[shared_memberaccountrulestatus_enum.MemberAccountRuleStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberAccountRuleStatus') }})
    

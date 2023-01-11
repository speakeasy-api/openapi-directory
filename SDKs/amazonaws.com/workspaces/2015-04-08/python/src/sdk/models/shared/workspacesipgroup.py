import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ipruleitem as shared_ipruleitem


@dataclass_json
@dataclasses.dataclass
class WorkspacesIPGroup:
    r"""WorkspacesIPGroup
    Describes an IP access control group.
    """
    
    group_desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupDesc') }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    user_rules: Optional[list[shared_ipruleitem.IPRuleItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRules') }})
    

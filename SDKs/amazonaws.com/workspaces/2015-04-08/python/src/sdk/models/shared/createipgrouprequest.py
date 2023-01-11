import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag
from ..shared import ipruleitem as shared_ipruleitem


@dataclass_json
@dataclasses.dataclass
class CreateIPGroupRequest:
    group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    group_desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupDesc') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    user_rules: Optional[list[shared_ipruleitem.IPRuleItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserRules') }})
    

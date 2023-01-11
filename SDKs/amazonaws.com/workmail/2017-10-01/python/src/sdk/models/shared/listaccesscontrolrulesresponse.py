import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesscontrolrule as shared_accesscontrolrule


@dataclass_json
@dataclasses.dataclass
class ListAccessControlRulesResponse:
    rules: Optional[list[shared_accesscontrolrule.AccessControlRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    

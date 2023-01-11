import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acl as shared_acl


@dataclass_json
@dataclasses.dataclass
class DescribeAcLsResponse:
    ac_ls: Optional[list[shared_acl.ACL]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACLs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

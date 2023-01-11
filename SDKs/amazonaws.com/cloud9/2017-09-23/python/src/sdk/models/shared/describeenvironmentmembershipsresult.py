import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentmember as shared_environmentmember


@dataclass_json
@dataclasses.dataclass
class DescribeEnvironmentMembershipsResult:
    memberships: Optional[list[shared_environmentmember.EnvironmentMember]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

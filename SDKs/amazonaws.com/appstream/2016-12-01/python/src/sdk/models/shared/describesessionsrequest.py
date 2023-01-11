import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationtype_enum as shared_authenticationtype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeSessionsRequest:
    fleet_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetName') }})
    stack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackName') }})
    authentication_type: Optional[shared_authenticationtype_enum.AuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthenticationType') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    

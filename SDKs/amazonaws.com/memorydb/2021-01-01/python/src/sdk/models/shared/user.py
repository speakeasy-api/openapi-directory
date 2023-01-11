import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authentication as shared_authentication


@dataclass_json
@dataclasses.dataclass
class User:
    r"""User
    You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters.
    """
    
    acl_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACLNames') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ARN') }})
    access_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessString') }})
    authentication: Optional[shared_authentication.Authentication] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Authentication') }})
    minimum_engine_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumEngineVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IamActionDefinition:
    r"""IamActionDefinition
     The AWS Identity and Access Management (IAM) action definition details. 
    """
    
    policy_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyArn') }})
    groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    roles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Roles') }})
    users: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Users') }})
    

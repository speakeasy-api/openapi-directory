import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import roletype_enum as shared_roletype_enum


@dataclass_json
@dataclasses.dataclass
class CreateDelegationRequest:
    r"""CreateDelegationRequest
     A collection of attributes used to create a delegation for an assessment in Audit Manager. 
    """
    
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    control_set_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlSetId') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    role_type: Optional[shared_roletype_enum.RoleTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleType') }})
    

import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grantconstraints as shared_grantconstraints
from ..shared import grantoperation_enum as shared_grantoperation_enum


@dataclass_json
@dataclasses.dataclass
class CreateGrantRequest:
    grantee_principal: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteePrincipal') }})
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    operations: list[shared_grantoperation_enum.GrantOperationEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    constraints: Optional[shared_grantconstraints.GrantConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Constraints') }})
    grant_tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    retiring_principal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetiringPrincipal') }})
    

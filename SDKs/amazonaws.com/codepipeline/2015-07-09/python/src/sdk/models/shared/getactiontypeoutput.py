import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontypedeclaration as shared_actiontypedeclaration


@dataclass_json
@dataclasses.dataclass
class GetActionTypeOutput:
    action_type: Optional[shared_actiontypedeclaration.ActionTypeDeclaration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    

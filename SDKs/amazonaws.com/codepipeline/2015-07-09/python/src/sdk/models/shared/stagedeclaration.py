import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiondeclaration as shared_actiondeclaration
from ..shared import blockerdeclaration as shared_blockerdeclaration


@dataclass_json
@dataclasses.dataclass
class StageDeclaration:
    r"""StageDeclaration
    Represents information about a stage and its definition.
    """
    
    actions: list[shared_actiondeclaration.ActionDeclaration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    blockers: Optional[list[shared_blockerdeclaration.BlockerDeclaration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockers') }})
    

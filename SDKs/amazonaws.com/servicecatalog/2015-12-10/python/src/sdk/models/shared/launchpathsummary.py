import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import constraintsummary as shared_constraintsummary
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class LaunchPathSummary:
    r"""LaunchPathSummary
    Summary information about a product path for a user.
    """
    
    constraint_summaries: Optional[list[shared_constraintsummary.ConstraintSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConstraintSummaries') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import constraintdetail as shared_constraintdetail


@dataclass_json
@dataclasses.dataclass
class ListConstraintsForPortfolioOutput:
    constraint_details: Optional[list[shared_constraintdetail.ConstraintDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConstraintDetails') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    

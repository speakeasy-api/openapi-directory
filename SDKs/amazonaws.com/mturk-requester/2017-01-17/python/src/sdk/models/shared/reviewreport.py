import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reviewactiondetail as shared_reviewactiondetail
from ..shared import reviewresultdetail as shared_reviewresultdetail


@dataclass_json
@dataclasses.dataclass
class ReviewReport:
    r"""ReviewReport
     Contains both ReviewResult and ReviewAction elements for a particular HIT. 
    """
    
    review_actions: Optional[list[shared_reviewactiondetail.ReviewActionDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewActions') }})
    review_results: Optional[list[shared_reviewresultdetail.ReviewResultDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewResults') }})
    

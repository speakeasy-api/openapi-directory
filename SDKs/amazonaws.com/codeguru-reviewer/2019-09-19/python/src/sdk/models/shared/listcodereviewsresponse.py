import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codereviewsummary as shared_codereviewsummary


@dataclass_json
@dataclasses.dataclass
class ListCodeReviewsResponse:
    code_review_summaries: Optional[list[shared_codereviewsummary.CodeReviewSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeReviewSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

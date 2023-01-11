import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codereview as shared_codereview


@dataclass_json
@dataclasses.dataclass
class DescribeCodeReviewResponse:
    code_review: Optional[shared_codereview.CodeReview] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeReview') }})
    

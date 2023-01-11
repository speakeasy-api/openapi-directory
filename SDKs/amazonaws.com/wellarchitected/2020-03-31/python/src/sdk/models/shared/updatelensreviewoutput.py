import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lensreview as shared_lensreview


@dataclass_json
@dataclasses.dataclass
class UpdateLensReviewOutput:
    r"""UpdateLensReviewOutput
    Output of a update lens review call.
    """
    
    lens_review: Optional[shared_lensreview.LensReview] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensReview') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    

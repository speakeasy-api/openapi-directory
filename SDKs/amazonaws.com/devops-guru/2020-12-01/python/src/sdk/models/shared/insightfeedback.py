import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import insightfeedbackoption_enum as shared_insightfeedbackoption_enum


@dataclass_json
@dataclasses.dataclass
class InsightFeedback:
    r"""InsightFeedback
     Information about insight feedback received from a customer. 
    """
    
    feedback: Optional[shared_insightfeedbackoption_enum.InsightFeedbackOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Feedback') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    

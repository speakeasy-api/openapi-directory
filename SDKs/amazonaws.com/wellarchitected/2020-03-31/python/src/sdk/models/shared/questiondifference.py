import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import differencestatus_enum as shared_differencestatus_enum


@dataclass_json
@dataclasses.dataclass
class QuestionDifference:
    r"""QuestionDifference
    A question difference return object.
    """
    
    difference_status: Optional[shared_differencestatus_enum.DifferenceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DifferenceStatus') }})
    question_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionId') }})
    question_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionTitle') }})
    

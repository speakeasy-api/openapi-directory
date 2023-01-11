import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import differencestatus_enum as shared_differencestatus_enum
from ..shared import questiondifference as shared_questiondifference


@dataclass_json
@dataclasses.dataclass
class PillarDifference:
    r"""PillarDifference
    A pillar difference return object.
    """
    
    difference_status: Optional[shared_differencestatus_enum.DifferenceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DifferenceStatus') }})
    pillar_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarId') }})
    question_differences: Optional[list[shared_questiondifference.QuestionDifference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionDifferences') }})
    

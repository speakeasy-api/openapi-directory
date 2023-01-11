import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import summarizedcounter as shared_summarizedcounter


@dataclass_json
@dataclasses.dataclass
class SummarizedAttackVector:
    r"""SummarizedAttackVector
    A summary of information about the attack.
    """
    
    vector_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VectorType') }})
    vector_counters: Optional[list[shared_summarizedcounter.SummarizedCounter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VectorCounters') }})
    

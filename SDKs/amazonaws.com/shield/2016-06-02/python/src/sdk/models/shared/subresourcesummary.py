import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import summarizedattackvector as shared_summarizedattackvector
from ..shared import summarizedcounter as shared_summarizedcounter
from ..shared import subresourcetype_enum as shared_subresourcetype_enum


@dataclass_json
@dataclasses.dataclass
class SubResourceSummary:
    r"""SubResourceSummary
    The attack information for the specified SubResource.
    """
    
    attack_vectors: Optional[list[shared_summarizedattackvector.SummarizedAttackVector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttackVectors') }})
    counters: Optional[list[shared_summarizedcounter.SummarizedCounter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Counters') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    type: Optional[shared_subresourcetype_enum.SubResourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

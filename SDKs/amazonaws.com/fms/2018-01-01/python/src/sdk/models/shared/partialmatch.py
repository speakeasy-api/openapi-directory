import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PartialMatch:
    r"""PartialMatch
    The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason.
    """
    
    reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    target_violation_reasons: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetViolationReasons') }})
    

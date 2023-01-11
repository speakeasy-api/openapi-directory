import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ComplianceContributorCount:
    r"""ComplianceContributorCount
    The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number.
    """
    
    cap_exceeded: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapExceeded') }})
    capped_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappedCount') }})
    

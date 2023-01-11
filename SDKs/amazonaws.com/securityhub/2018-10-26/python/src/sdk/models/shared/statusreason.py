import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StatusReason:
    r"""StatusReason
    Provides additional context for the value of <code>Compliance.Status</code>.
    """
    
    reason_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReasonCode') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    

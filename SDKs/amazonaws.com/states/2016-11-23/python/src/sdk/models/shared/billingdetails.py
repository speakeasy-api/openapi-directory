import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BillingDetails:
    r"""BillingDetails
    An object that describes workflow billing details.
    """
    
    billed_duration_in_milliseconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedDurationInMilliseconds') }})
    billed_memory_used_in_mb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedMemoryUsedInMB') }})
    

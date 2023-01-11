import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offeringstatus as shared_offeringstatus


@dataclass_json
@dataclasses.dataclass
class GetOfferingStatusResult:
    r"""GetOfferingStatusResult
    Returns the status result for a device offering.
    """
    
    current: Optional[dict[str, shared_offeringstatus.OfferingStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next_period: Optional[dict[str, shared_offeringstatus.OfferingStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPeriod') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

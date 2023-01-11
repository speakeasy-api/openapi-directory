import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offering as shared_offering


@dataclass_json
@dataclasses.dataclass
class ListOfferingsResult:
    r"""ListOfferingsResult
    Represents the return values of the list of offerings.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    offerings: Optional[list[shared_offering.Offering]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerings') }})
    

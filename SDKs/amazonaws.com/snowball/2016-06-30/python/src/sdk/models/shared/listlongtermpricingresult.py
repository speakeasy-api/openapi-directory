import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import longtermpricinglistentry as shared_longtermpricinglistentry


@dataclass_json
@dataclasses.dataclass
class ListLongTermPricingResult:
    long_term_pricing_entries: Optional[list[shared_longtermpricinglistentry.LongTermPricingListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingEntries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

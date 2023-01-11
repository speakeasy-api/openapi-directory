import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savingsplanoffering as shared_savingsplanoffering


@dataclass_json
@dataclasses.dataclass
class DescribeSavingsPlansOfferingsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    search_results: Optional[list[shared_savingsplanoffering.SavingsPlanOffering]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchResults') }})
    

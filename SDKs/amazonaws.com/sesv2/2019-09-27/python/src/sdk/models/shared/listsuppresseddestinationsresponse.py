import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suppresseddestinationsummary as shared_suppresseddestinationsummary


@dataclass_json
@dataclasses.dataclass
class ListSuppressedDestinationsResponse:
    r"""ListSuppressedDestinationsResponse
    A list of suppressed email addresses.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    suppressed_destination_summaries: Optional[list[shared_suppresseddestinationsummary.SuppressedDestinationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressedDestinationSummaries') }})
    

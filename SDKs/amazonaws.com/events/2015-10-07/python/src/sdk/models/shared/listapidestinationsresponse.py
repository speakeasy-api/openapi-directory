import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apidestination as shared_apidestination


@dataclass_json
@dataclasses.dataclass
class ListAPIDestinationsResponse:
    api_destinations: Optional[list[shared_apidestination.APIDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiDestinations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

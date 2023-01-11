import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import journeyresponse as shared_journeyresponse


@dataclass_json
@dataclasses.dataclass
class JourneysResponse:
    r"""JourneysResponse
    Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
    """
    
    item: list[shared_journeyresponse.JourneyResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Endpoint:
    r"""Endpoint
    Represents an available endpoint against which to make API calls agaisnt, as well as the TTL for that endpoint.
    """
    
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    cache_period_in_minutes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CachePeriodInMinutes') }})
    

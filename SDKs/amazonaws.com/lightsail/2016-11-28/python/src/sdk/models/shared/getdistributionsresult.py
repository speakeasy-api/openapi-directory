import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lightsaildistribution as shared_lightsaildistribution


@dataclass_json
@dataclasses.dataclass
class GetDistributionsResult:
    distributions: Optional[list[shared_lightsaildistribution.LightsailDistribution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

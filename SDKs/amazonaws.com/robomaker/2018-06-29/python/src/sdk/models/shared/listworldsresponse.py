import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import worldsummary as shared_worldsummary


@dataclass_json
@dataclasses.dataclass
class ListWorldsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    world_summaries: Optional[list[shared_worldsummary.WorldSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('worldSummaries') }})
    

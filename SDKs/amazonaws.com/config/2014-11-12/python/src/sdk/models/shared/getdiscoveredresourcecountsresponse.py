import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcecount as shared_resourcecount


@dataclass_json
@dataclasses.dataclass
class GetDiscoveredResourceCountsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    resource_counts: Optional[list[shared_resourcecount.ResourceCount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceCounts') }})
    total_discovered_resources: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDiscoveredResources') }})
    

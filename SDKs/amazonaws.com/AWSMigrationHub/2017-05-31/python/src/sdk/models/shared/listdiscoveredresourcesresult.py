import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import discoveredresource as shared_discoveredresource


@dataclass_json
@dataclasses.dataclass
class ListDiscoveredResourcesResult:
    discovered_resource_list: Optional[list[shared_discoveredresource.DiscoveredResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiscoveredResourceList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

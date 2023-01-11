import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupedresourcecount as shared_groupedresourcecount


@dataclass_json
@dataclasses.dataclass
class GetAggregateDiscoveredResourceCountsResponse:
    total_discovered_resources: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalDiscoveredResources') }})
    group_by_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByKey') }})
    grouped_resource_counts: Optional[list[shared_groupedresourcecount.GroupedResourceCount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupedResourceCounts') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

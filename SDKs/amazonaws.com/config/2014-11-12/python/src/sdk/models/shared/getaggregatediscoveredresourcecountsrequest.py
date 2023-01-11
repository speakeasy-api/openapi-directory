import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcecountfilters as shared_resourcecountfilters
from ..shared import resourcecountgroupkey_enum as shared_resourcecountgroupkey_enum


@dataclass_json
@dataclasses.dataclass
class GetAggregateDiscoveredResourceCountsRequest:
    configuration_aggregator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    filters: Optional[shared_resourcecountfilters.ResourceCountFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    group_by_key: Optional[shared_resourcecountgroupkey_enum.ResourceCountGroupKeyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByKey') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

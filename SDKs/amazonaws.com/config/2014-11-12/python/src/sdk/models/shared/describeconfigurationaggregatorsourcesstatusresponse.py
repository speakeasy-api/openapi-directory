import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregatedsourcestatus as shared_aggregatedsourcestatus


@dataclass_json
@dataclasses.dataclass
class DescribeConfigurationAggregatorSourcesStatusResponse:
    aggregated_source_status_list: Optional[list[shared_aggregatedsourcestatus.AggregatedSourceStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregatedSourceStatusList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

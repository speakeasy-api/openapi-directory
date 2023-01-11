import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationaggregator as shared_configurationaggregator


@dataclass_json
@dataclasses.dataclass
class DescribeConfigurationAggregatorsResponse:
    configuration_aggregators: Optional[list[shared_configurationaggregator.ConfigurationAggregator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregators') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

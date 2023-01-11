import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountaggregationsource as shared_accountaggregationsource
from ..shared import organizationaggregationsource as shared_organizationaggregationsource
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class PutConfigurationAggregatorRequest:
    configuration_aggregator_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    account_aggregation_sources: Optional[list[shared_accountaggregationsource.AccountAggregationSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountAggregationSources') }})
    organization_aggregation_source: Optional[shared_organizationaggregationsource.OrganizationAggregationSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationAggregationSource') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

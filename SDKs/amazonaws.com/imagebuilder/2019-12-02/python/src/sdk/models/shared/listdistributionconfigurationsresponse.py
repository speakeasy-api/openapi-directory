import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import distributionconfigurationsummary as shared_distributionconfigurationsummary


@dataclass_json
@dataclasses.dataclass
class ListDistributionConfigurationsResponse:
    distribution_configuration_summary_list: Optional[list[shared_distributionconfigurationsummary.DistributionConfigurationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionConfigurationSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

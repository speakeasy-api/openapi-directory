import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import distributionconfiguration as shared_distributionconfiguration


@dataclass_json
@dataclasses.dataclass
class GetDistributionConfigurationResponse:
    distribution_configuration: Optional[shared_distributionconfiguration.DistributionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionConfiguration') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import infrastructureconfigurationsummary as shared_infrastructureconfigurationsummary


@dataclass_json
@dataclasses.dataclass
class ListInfrastructureConfigurationsResponse:
    infrastructure_configuration_summary_list: Optional[list[shared_infrastructureconfigurationsummary.InfrastructureConfigurationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureConfigurationSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

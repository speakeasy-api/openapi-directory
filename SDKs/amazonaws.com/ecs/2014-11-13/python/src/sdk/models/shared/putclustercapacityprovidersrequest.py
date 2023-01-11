import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capacityproviderstrategyitem as shared_capacityproviderstrategyitem


@dataclass_json
@dataclasses.dataclass
class PutClusterCapacityProvidersRequest:
    capacity_providers: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviders') }})
    cluster: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    default_capacity_provider_strategy: list[shared_capacityproviderstrategyitem.CapacityProviderStrategyItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCapacityProviderStrategy') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capacityprovider as shared_capacityprovider


@dataclass_json
@dataclasses.dataclass
class DeleteCapacityProviderResponse:
    capacity_provider: Optional[shared_capacityprovider.CapacityProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProvider') }})
    

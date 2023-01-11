import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capacityprovider as shared_capacityprovider
from ..shared import failure as shared_failure


@dataclass_json
@dataclasses.dataclass
class DescribeCapacityProvidersResponse:
    capacity_providers: Optional[list[shared_capacityprovider.CapacityProvider]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviders') }})
    failures: Optional[list[shared_failure.Failure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currentcontractinfo as shared_currentcontractinfo
from ..shared import contractslinks as shared_contractslinks
from ..shared import nextcontractinfo as shared_nextcontractinfo


@dataclass_json
@dataclasses.dataclass
class Contracts:
    links: shared_contractslinks.ContractsLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    current: Optional[shared_currentcontractinfo.CurrentContractInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    next: Optional[shared_nextcontractinfo.NextContractInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

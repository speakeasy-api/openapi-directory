import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ecosystem as shared_ecosystem


@dataclass_json
@dataclasses.dataclass
class GetEcosystemResponse:
    data: shared_ecosystem.Ecosystem = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environmentsummary as shared_environmentsummary


@dataclass_json
@dataclasses.dataclass
class ListEnvironmentsOutput:
    environments: list[shared_environmentsummary.EnvironmentSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

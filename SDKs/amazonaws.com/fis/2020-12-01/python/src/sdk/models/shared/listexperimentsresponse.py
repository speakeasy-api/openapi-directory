import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import experimentsummary as shared_experimentsummary


@dataclass_json
@dataclasses.dataclass
class ListExperimentsResponse:
    experiments: Optional[list[shared_experimentsummary.ExperimentSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experiments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

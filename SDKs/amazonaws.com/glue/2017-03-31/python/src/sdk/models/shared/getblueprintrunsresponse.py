import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blueprintrun as shared_blueprintrun


@dataclass_json
@dataclasses.dataclass
class GetBlueprintRunsResponse:
    blueprint_runs: Optional[list[shared_blueprintrun.BlueprintRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlueprintRuns') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

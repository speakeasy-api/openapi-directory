import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blueprintrun as shared_blueprintrun


@dataclass_json
@dataclasses.dataclass
class GetBlueprintRunResponse:
    blueprint_run: Optional[shared_blueprintrun.BlueprintRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlueprintRun') }})
    

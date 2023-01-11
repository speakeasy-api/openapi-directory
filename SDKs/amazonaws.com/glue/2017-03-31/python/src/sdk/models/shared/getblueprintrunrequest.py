import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetBlueprintRunRequest:
    blueprint_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlueprintName') }})
    run_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunId') }})
    

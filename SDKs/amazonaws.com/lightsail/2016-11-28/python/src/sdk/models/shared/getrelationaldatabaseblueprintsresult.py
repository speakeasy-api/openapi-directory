import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relationaldatabaseblueprint as shared_relationaldatabaseblueprint


@dataclass_json
@dataclasses.dataclass
class GetRelationalDatabaseBlueprintsResult:
    blueprints: Optional[list[shared_relationaldatabaseblueprint.RelationalDatabaseBlueprint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueprints') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

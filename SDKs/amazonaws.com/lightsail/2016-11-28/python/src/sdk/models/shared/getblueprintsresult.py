import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blueprint as shared_blueprint


@dataclass_json
@dataclasses.dataclass
class GetBlueprintsResult:
    blueprints: Optional[list[shared_blueprint.Blueprint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueprints') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

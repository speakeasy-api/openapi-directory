import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import studiocomponent as shared_studiocomponent


@dataclass_json
@dataclasses.dataclass
class ListStudioComponentsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    studio_components: Optional[list[shared_studiocomponent.StudioComponent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioComponents') }})
    

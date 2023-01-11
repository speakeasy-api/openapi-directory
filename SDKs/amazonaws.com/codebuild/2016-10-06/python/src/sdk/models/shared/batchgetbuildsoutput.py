import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import build as shared_build


@dataclass_json
@dataclasses.dataclass
class BatchGetBuildsOutput:
    builds: Optional[list[shared_build.Build]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builds') }})
    builds_not_found: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildsNotFound') }})
    

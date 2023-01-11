import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testgridsessionartifact as shared_testgridsessionartifact


@dataclass_json
@dataclasses.dataclass
class ListTestGridSessionArtifactsResult:
    artifacts: Optional[list[shared_testgridsessionartifact.TestGridSessionArtifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    

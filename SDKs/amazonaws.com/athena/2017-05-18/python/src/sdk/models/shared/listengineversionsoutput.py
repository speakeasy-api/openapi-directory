import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engineversion as shared_engineversion


@dataclass_json
@dataclasses.dataclass
class ListEngineVersionsOutput:
    engine_versions: Optional[list[shared_engineversion.EngineVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

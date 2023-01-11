import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snapshot as shared_snapshot


@dataclass_json
@dataclasses.dataclass
class ArchivedResult:
    snapshot: shared_snapshot.Snapshot = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot') }})
    timestamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

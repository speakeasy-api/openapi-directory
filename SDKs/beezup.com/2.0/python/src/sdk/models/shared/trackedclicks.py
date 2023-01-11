import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trackedclick as shared_trackedclick


@dataclass_json
@dataclasses.dataclass
class TrackedClicks:
    clicks: list[shared_trackedclick.TrackedClick] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicks') }})
    

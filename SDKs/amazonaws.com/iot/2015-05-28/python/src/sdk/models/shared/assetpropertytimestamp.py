import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssetPropertyTimestamp:
    r"""AssetPropertyTimestamp
    An asset property timestamp entry containing the following information.
    """
    
    time_in_seconds: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeInSeconds') }})
    offset_in_nanos: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetInNanos') }})
    

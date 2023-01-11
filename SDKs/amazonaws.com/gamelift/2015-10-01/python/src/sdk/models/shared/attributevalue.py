import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AttributeValue:
    n: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('N') }})
    s: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S') }})
    sdm: Optional[dict[str, float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SDM') }})
    sl: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SL') }})
    

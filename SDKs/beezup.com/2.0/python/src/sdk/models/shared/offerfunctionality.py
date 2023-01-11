import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OfferFunctionality:
    functionality_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionalityCode') }})
    unlimited: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    max_value_integer: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValueInteger') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FunctionalityRightInfo:
    r"""FunctionalityRightInfo
    Describe the rights for a functionality
    """
    
    functionality_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionalityCode') }})
    max_value_interger: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValueInterger') }})
    unlimited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited') }})
    

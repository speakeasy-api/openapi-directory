import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MultipleValuesSetting:
    r"""MultipleValuesSetting
    Indicates whether a slot can return multiple values.
    """
    
    allow_multiple_values: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultipleValues') }})
    

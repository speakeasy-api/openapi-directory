import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DimensionNameValue:
    r"""DimensionNameValue
    A dimension name and value.
    """
    
    dimension_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionName') }})
    dimension_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionValue') }})
    

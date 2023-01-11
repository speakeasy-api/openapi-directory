import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DecimalNumber:
    r"""DecimalNumber
    Contains a numeric value in decimal format.
    """
    
    scale: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scale') }})
    unscaled_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnscaledValue') }})
    

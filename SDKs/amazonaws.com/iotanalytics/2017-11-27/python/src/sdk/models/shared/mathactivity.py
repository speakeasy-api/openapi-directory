import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MathActivity:
    r"""MathActivity
    An activity that computes an arithmetic expression using the message's attributes.
    """
    
    attribute: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    math: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('math') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

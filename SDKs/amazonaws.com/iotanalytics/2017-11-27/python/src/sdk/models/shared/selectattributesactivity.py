import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SelectAttributesActivity:
    r"""SelectAttributesActivity
    Used to create a new message using only the specified attributes from the original message.
    """
    
    attributes: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

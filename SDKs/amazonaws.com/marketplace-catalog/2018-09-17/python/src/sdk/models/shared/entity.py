import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Entity:
    r"""Entity
    An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. 
    """
    
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    

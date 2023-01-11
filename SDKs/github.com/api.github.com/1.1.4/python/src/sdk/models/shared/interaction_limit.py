import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import interaction_expiry_enum as shared_interaction_expiry_enum
from ..shared import interaction_group_enum as shared_interaction_group_enum


@dataclass_json
@dataclasses.dataclass
class InteractionLimit:
    r"""InteractionLimit
    Limit interactions to a specific type of user for a specified duration
    """
    
    limit: shared_interaction_group_enum.InteractionGroupEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    expiry: Optional[shared_interaction_expiry_enum.InteractionExpiryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry') }})
    

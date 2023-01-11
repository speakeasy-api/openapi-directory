import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RotationRulesType:
    r"""RotationRulesType
    A structure that defines the rotation configuration for the secret.
    """
    
    automatically_after_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomaticallyAfterDays') }})
    

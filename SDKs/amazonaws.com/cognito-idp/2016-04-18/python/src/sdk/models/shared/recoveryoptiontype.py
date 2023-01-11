import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recoveryoptionnametype_enum as shared_recoveryoptionnametype_enum


@dataclass_json
@dataclasses.dataclass
class RecoveryOptionType:
    r"""RecoveryOptionType
    A map containing a priority as a key, and recovery method name as a value.
    """
    
    name: shared_recoveryoptionnametype_enum.RecoveryOptionNameTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    

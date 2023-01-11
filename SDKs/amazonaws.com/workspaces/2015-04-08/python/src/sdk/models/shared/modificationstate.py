import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modificationresourceenum_enum as shared_modificationresourceenum_enum
from ..shared import modificationstateenum_enum as shared_modificationstateenum_enum


@dataclass_json
@dataclasses.dataclass
class ModificationState:
    r"""ModificationState
    Describes a WorkSpace modification.
    """
    
    resource: Optional[shared_modificationresourceenum_enum.ModificationResourceEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    state: Optional[shared_modificationstateenum_enum.ModificationStateEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

import dataclasses
from typing import Optional
from ..shared import optiongroup as shared_optiongroup


@dataclasses.dataclass
class CopyOptionGroupResult:
    option_group: Optional[shared_optiongroup.OptionGroup] = dataclasses.field(default=None)
    

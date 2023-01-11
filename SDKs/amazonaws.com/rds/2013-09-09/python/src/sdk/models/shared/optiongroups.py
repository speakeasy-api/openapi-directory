import dataclasses
from typing import Optional
from ..shared import optiongroupslist as shared_optiongroupslist


@dataclasses.dataclass
class OptionGroups:
    marker: Optional[str] = dataclasses.field(default=None)
    option_groups_list: Optional[list[shared_optiongroupslist.OptionGroupsList]] = dataclasses.field(default=None)
    

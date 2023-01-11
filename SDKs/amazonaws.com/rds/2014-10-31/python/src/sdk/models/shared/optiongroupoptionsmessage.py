import dataclasses
from typing import Optional
from ..shared import optiongroupoptionslist as shared_optiongroupoptionslist


@dataclasses.dataclass
class OptionGroupOptionsMessage:
    r"""OptionGroupOptionsMessage
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    option_group_options: Optional[list[shared_optiongroupoptionslist.OptionGroupOptionsList]] = dataclasses.field(default=None)
    

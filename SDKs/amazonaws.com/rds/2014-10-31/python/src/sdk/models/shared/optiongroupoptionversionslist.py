import dataclasses
from typing import Optional


@dataclasses.dataclass
class OptionGroupOptionVersionsList:
    r"""OptionGroupOptionVersionsList
    The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action.
    """
    
    is_default: Optional[bool] = dataclasses.field(default=None)
    version: Optional[str] = dataclasses.field(default=None)
    

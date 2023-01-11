import dataclasses
from typing import Optional


@dataclasses.dataclass
class UIntOptions:
    r"""UIntOptions
    Options that define a <code>uint</code> field in the search index.
    """
    
    default_value: Optional[int] = dataclasses.field(default=None)
    

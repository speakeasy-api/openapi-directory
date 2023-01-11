import dataclasses
from typing import Optional


@dataclasses.dataclass
class QueryStringKeyValuePair:
    r"""QueryStringKeyValuePair
    Information about a key/value pair.
    """
    
    key: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    

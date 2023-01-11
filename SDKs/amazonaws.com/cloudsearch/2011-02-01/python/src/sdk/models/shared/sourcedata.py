import dataclasses
from typing import Optional


@dataclasses.dataclass
class SourceData:
    r"""SourceData
    The source attribute name and an optional default value to use if a document doesn't have an attribute of that name.
    """
    
    source_name: str = dataclasses.field()
    default_value: Optional[str] = dataclasses.field(default=None)
    

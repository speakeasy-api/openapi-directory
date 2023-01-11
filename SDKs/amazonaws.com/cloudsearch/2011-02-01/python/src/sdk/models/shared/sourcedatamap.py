import dataclasses
from typing import Optional


@dataclasses.dataclass
class SourceDataMap:
    r"""SourceDataMap
    Specifies how to map source attribute values to custom values when populating an <code>IndexField</code>.
    """
    
    source_name: str = dataclasses.field()
    cases: Optional[dict[str, str]] = dataclasses.field(default=None)
    default_value: Optional[str] = dataclasses.field(default=None)
    

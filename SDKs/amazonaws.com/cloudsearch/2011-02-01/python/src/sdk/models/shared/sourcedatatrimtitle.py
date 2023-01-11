import dataclasses
from typing import Optional


@dataclasses.dataclass
class SourceDataTrimTitle:
    r"""SourceDataTrimTitle
    Specifies how to trim common words from the beginning of a field to enable title sorting by that field.
    """
    
    source_name: str = dataclasses.field()
    default_value: Optional[str] = dataclasses.field(default=None)
    language: Optional[str] = dataclasses.field(default=None)
    separator: Optional[str] = dataclasses.field(default=None)
    

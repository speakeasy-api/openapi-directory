import dataclasses
from typing import Optional


@dataclasses.dataclass
class LiteralOptions:
    r"""LiteralOptions
    Options that define a literal field in the search index.
    """
    
    default_value: Optional[str] = dataclasses.field(default=None)
    facet_enabled: Optional[bool] = dataclasses.field(default=None)
    result_enabled: Optional[bool] = dataclasses.field(default=None)
    search_enabled: Optional[bool] = dataclasses.field(default=None)
    

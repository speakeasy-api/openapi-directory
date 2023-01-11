import dataclasses
from typing import Optional


@dataclasses.dataclass
class LiteralOptions:
    r"""LiteralOptions
    Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.
    """
    
    default_value: Optional[str] = dataclasses.field(default=None)
    facet_enabled: Optional[bool] = dataclasses.field(default=None)
    return_enabled: Optional[bool] = dataclasses.field(default=None)
    search_enabled: Optional[bool] = dataclasses.field(default=None)
    sort_enabled: Optional[bool] = dataclasses.field(default=None)
    source_field: Optional[str] = dataclasses.field(default=None)
    

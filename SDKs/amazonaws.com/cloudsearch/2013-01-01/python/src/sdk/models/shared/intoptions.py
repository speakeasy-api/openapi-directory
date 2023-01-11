import dataclasses
from typing import Optional


@dataclasses.dataclass
class IntOptions:
    r"""IntOptions
    Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.
    """
    
    default_value: Optional[int] = dataclasses.field(default=None)
    facet_enabled: Optional[bool] = dataclasses.field(default=None)
    return_enabled: Optional[bool] = dataclasses.field(default=None)
    search_enabled: Optional[bool] = dataclasses.field(default=None)
    sort_enabled: Optional[bool] = dataclasses.field(default=None)
    source_field: Optional[str] = dataclasses.field(default=None)
    

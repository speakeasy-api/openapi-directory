import dataclasses
from typing import Optional


@dataclasses.dataclass
class IntArrayOptions:
    r"""IntArrayOptions
    Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.
    """
    
    default_value: Optional[int] = dataclasses.field(default=None)
    facet_enabled: Optional[bool] = dataclasses.field(default=None)
    return_enabled: Optional[bool] = dataclasses.field(default=None)
    search_enabled: Optional[bool] = dataclasses.field(default=None)
    source_fields: Optional[str] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class TextOptions:
    r"""TextOptions
    Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.
    """
    
    analysis_scheme: Optional[str] = dataclasses.field(default=None)
    default_value: Optional[str] = dataclasses.field(default=None)
    highlight_enabled: Optional[bool] = dataclasses.field(default=None)
    return_enabled: Optional[bool] = dataclasses.field(default=None)
    sort_enabled: Optional[bool] = dataclasses.field(default=None)
    source_field: Optional[str] = dataclasses.field(default=None)
    

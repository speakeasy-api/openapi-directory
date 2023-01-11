import dataclasses
from typing import Optional


@dataclasses.dataclass
class TextOptions:
    r"""TextOptions
    Options that define a text field in the search index.
    """
    
    default_value: Optional[str] = dataclasses.field(default=None)
    facet_enabled: Optional[bool] = dataclasses.field(default=None)
    result_enabled: Optional[bool] = dataclasses.field(default=None)
    text_processor: Optional[str] = dataclasses.field(default=None)
    

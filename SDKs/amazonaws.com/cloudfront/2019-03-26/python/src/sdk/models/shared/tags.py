import dataclasses
from typing import Optional
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class Tags:
    r"""Tags
     A complex type that contains zero or more <code>Tag</code> elements.
    """
    
    items: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    

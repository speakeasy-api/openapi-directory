import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class ListTagsForResourceOutput:
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import tagdescription as shared_tagdescription


@dataclasses.dataclass
class TagsType:
    next_token: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_tagdescription.TagDescription]] = dataclasses.field(default=None)
    

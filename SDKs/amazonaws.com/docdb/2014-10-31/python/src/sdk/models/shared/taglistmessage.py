import dataclasses
from typing import Optional
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class TagListMessage:
    r"""TagListMessage
    Represents the output of <a>ListTagsForResource</a>.
    """
    
    tag_list: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    

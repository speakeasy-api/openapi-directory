import dataclasses
from typing import Optional
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class TagListMessage:
    r"""TagListMessage
    Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.
    """
    
    tag_list: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    

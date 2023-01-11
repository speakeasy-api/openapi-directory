import dataclasses
from typing import Optional
from ..shared import taggedresourcelist as shared_taggedresourcelist


@dataclasses.dataclass
class TaggedResourceListMessage:
    r"""TaggedResourceListMessage
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    tagged_resources: Optional[list[shared_taggedresourcelist.TaggedResourceList]] = dataclasses.field(default=None)
    

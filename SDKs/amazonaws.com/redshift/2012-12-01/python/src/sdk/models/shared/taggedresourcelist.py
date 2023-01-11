import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class TaggedResourceList:
    r"""TaggedResourceList
    A tag and its associated resource.
    """
    
    resource_name: Optional[str] = dataclasses.field(default=None)
    resource_type: Optional[str] = dataclasses.field(default=None)
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    

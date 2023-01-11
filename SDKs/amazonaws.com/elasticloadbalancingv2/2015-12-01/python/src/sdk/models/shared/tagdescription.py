import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class TagDescription:
    r"""TagDescription
    The tags associated with a resource.
    """
    
    resource_arn: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    

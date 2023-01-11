import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class ResourceTagsDescriptionMessage:
    resource_arn: Optional[str] = dataclasses.field(default=None)
    resource_tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    

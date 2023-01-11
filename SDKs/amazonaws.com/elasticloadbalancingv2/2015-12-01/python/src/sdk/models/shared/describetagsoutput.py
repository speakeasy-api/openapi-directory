import dataclasses
from typing import Optional
from ..shared import tagdescription as shared_tagdescription


@dataclasses.dataclass
class DescribeTagsOutput:
    tag_descriptions: Optional[list[shared_tagdescription.TagDescription]] = dataclasses.field(default=None)
    

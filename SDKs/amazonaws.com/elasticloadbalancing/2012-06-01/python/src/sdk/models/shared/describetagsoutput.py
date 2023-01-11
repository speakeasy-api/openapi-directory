import dataclasses
from typing import Optional
from ..shared import tagdescription as shared_tagdescription


@dataclasses.dataclass
class DescribeTagsOutput:
    r"""DescribeTagsOutput
    Contains the output for DescribeTags.
    """
    
    tag_descriptions: Optional[list[shared_tagdescription.TagDescription]] = dataclasses.field(default=None)
    

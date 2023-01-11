import dataclasses
from ..shared import tags as shared_tags


@dataclasses.dataclass
class ListTagsForResourceResult:
    r"""ListTagsForResourceResult
     The returned result of the corresponding request.
    """
    
    tags: shared_tags.Tags = dataclasses.field()
    

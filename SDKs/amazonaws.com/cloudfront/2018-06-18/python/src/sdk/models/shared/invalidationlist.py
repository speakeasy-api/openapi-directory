import dataclasses
from typing import Optional
from ..shared import invalidationsummarylist as shared_invalidationsummarylist


@dataclasses.dataclass
class InvalidationList:
    r"""InvalidationList
    The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href=\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html\">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.
    """
    
    is_truncated: bool = dataclasses.field()
    marker: str = dataclasses.field()
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_invalidationsummarylist.InvalidationSummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    

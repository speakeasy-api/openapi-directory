import dataclasses
from typing import Optional
from ..shared import sourceregionlist as shared_sourceregionlist


@dataclasses.dataclass
class SourceRegionMessage:
    r"""SourceRegionMessage
    Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    source_regions: Optional[list[shared_sourceregionlist.SourceRegionList]] = dataclasses.field(default=None)
    

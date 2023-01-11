import dataclasses
from typing import Optional
from ..shared import functionsummarylist as shared_functionsummarylist


@dataclasses.dataclass
class FunctionList:
    r"""FunctionList
    A list of CloudFront functions.
    """
    
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_functionsummarylist.FunctionSummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    

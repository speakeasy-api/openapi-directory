import dataclasses
from typing import Optional
from ..shared import reservednodelist as shared_reservednodelist


@dataclasses.dataclass
class ReservedNodesMessage:
    r"""ReservedNodesMessage
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None)
    reserved_nodes: Optional[list[shared_reservednodelist.ReservedNodeList]] = dataclasses.field(default=None)
    

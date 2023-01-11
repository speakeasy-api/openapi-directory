import dataclasses
from typing import Optional


@dataclasses.dataclass
class Position:
    r"""Position
    <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p>
    """
    
    column: Optional[int] = dataclasses.field(default=None)
    line: Optional[int] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional


@dataclasses.dataclass
class BatchResultErrorEntryList:
    r"""BatchResultErrorEntryList
    Gives a detailed description of the result of an action on each entry in the request.
    """
    
    code: str = dataclasses.field()
    id: str = dataclasses.field()
    sender_fault: bool = dataclasses.field()
    message: Optional[str] = dataclasses.field(default=None)
    

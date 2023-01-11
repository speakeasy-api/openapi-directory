import dataclasses
from typing import Optional
from ..shared import processtype as shared_processtype


@dataclasses.dataclass
class ProcessesType:
    processes: Optional[list[shared_processtype.ProcessType]] = dataclasses.field(default=None)
    

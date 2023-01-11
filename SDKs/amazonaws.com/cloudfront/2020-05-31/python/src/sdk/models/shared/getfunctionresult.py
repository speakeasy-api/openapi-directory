import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetFunctionResult:
    function_code: Optional[str] = dataclasses.field(default=None)
    

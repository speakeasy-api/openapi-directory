import dataclasses
from typing import Optional
from ..shared import functionlist as shared_functionlist


@dataclasses.dataclass
class ListFunctionsResult:
    function_list: Optional[shared_functionlist.FunctionList] = dataclasses.field(default=None)
    

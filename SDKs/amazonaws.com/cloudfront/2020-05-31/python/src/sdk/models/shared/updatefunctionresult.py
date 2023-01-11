import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import functionsummary as shared_functionsummary


@dataclasses.dataclass
class UpdateFunctionResult:
    function_summary: Optional[shared_functionsummary.FunctionSummary] = dataclasses.field(default=None)
    

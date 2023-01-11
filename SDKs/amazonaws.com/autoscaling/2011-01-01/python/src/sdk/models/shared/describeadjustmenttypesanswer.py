import dataclasses
from typing import Optional
from ..shared import adjustmenttype as shared_adjustmenttype


@dataclasses.dataclass
class DescribeAdjustmentTypesAnswer:
    adjustment_types: Optional[list[shared_adjustmenttype.AdjustmentType]] = dataclasses.field(default=None)
    

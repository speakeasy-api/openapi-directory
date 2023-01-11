import dataclasses
from typing import Optional
from ..shared import targetgroupattribute as shared_targetgroupattribute


@dataclasses.dataclass
class DescribeTargetGroupAttributesOutput:
    attributes: Optional[list[shared_targetgroupattribute.TargetGroupAttribute]] = dataclasses.field(default=None)
    

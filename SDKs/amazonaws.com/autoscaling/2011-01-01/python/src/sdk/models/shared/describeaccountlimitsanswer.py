import dataclasses
from typing import Optional


@dataclasses.dataclass
class DescribeAccountLimitsAnswer:
    max_number_of_auto_scaling_groups: Optional[int] = dataclasses.field(default=None)
    max_number_of_launch_configurations: Optional[int] = dataclasses.field(default=None)
    number_of_auto_scaling_groups: Optional[int] = dataclasses.field(default=None)
    number_of_launch_configurations: Optional[int] = dataclasses.field(default=None)
    

import dataclasses
from typing import Optional
from ..shared import compositealarm as shared_compositealarm
from ..shared import metricalarm as shared_metricalarm


@dataclasses.dataclass
class DescribeAlarmsOutput:
    composite_alarms: Optional[list[shared_compositealarm.CompositeAlarm]] = dataclasses.field(default=None)
    metric_alarms: Optional[list[shared_metricalarm.MetricAlarm]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    

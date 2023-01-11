import dataclasses
from typing import Optional
from ..shared import metricalarm as shared_metricalarm


@dataclasses.dataclass
class DescribeAlarmsForMetricOutput:
    metric_alarms: Optional[list[shared_metricalarm.MetricAlarm]] = dataclasses.field(default=None)
    

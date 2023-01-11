import dataclasses
from enum import Enum

class AlarmTypeEnum(str, Enum):
    COMPOSITE_ALARM = "CompositeAlarm"
    METRIC_ALARM = "MetricAlarm"


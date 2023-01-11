import dataclasses
from enum import Enum

class RealtimeMetricsSubscriptionStatusEnum(str, Enum):
    ENABLED = "Enabled"
    DISABLED = "Disabled"


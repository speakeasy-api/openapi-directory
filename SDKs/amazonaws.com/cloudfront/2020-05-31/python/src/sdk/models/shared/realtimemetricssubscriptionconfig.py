import dataclasses
from enum import Enum
from ..shared import realtimemetricssubscriptionstatus_enum as shared_realtimemetricssubscriptionstatus_enum


@dataclasses.dataclass
class RealtimeMetricsSubscriptionConfig:
    r"""RealtimeMetricsSubscriptionConfig
    A subscription configuration for additional CloudWatch metrics.
    """
    
    realtime_metrics_subscription_status: shared_realtimemetricssubscriptionstatus_enum.RealtimeMetricsSubscriptionStatusEnum = dataclasses.field()
    

import dataclasses
from typing import Optional
from ..shared import realtimemetricssubscriptionconfig as shared_realtimemetricssubscriptionconfig


@dataclasses.dataclass
class MonitoringSubscription:
    r"""MonitoringSubscription
    A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
    """
    
    realtime_metrics_subscription_config: Optional[shared_realtimemetricssubscriptionconfig.RealtimeMetricsSubscriptionConfig] = dataclasses.field(default=None)
    

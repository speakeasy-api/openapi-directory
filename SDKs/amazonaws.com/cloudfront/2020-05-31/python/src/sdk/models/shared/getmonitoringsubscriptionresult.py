import dataclasses
from typing import Optional
from ..shared import monitoringsubscription as shared_monitoringsubscription


@dataclasses.dataclass
class GetMonitoringSubscriptionResult:
    monitoring_subscription: Optional[shared_monitoringsubscription.MonitoringSubscription] = dataclasses.field(default=None)
    

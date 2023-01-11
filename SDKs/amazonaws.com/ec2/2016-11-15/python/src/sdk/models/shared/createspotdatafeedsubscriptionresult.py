import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault:
    r"""CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
    The fault codes for the Spot Instance request, if any.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription:
    r"""CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription
    The Spot Instance data feed subscription.
    """
    
    bucket: Optional[dict[str, Any]] = dataclasses.field(default=None)
    fault: Optional[CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSpotDatafeedSubscriptionResult:
    r"""CreateSpotDatafeedSubscriptionResult
    Contains the output of CreateSpotDatafeedSubscription.
    """
    
    spot_datafeed_subscription: Optional[CreateSpotDatafeedSubscriptionResultSpotDatafeedSubscription] = dataclasses.field(default=None)
    

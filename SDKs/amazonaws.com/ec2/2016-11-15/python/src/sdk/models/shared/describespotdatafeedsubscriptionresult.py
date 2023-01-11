import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault:
    r"""DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault
    The fault codes for the Spot Instance request, if any.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription:
    r"""DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription
    The Spot Instance data feed subscription.
    """
    
    bucket: Optional[dict[str, Any]] = dataclasses.field(default=None)
    fault: Optional[DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscriptionFault] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DescribeSpotDatafeedSubscriptionResult:
    r"""DescribeSpotDatafeedSubscriptionResult
    Contains the output of DescribeSpotDatafeedSubscription.
    """
    
    spot_datafeed_subscription: Optional[DescribeSpotDatafeedSubscriptionResultSpotDatafeedSubscription] = dataclasses.field(default=None)
    

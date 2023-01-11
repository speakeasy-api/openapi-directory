import dataclasses
from typing import Optional
from ..shared import configurationset as shared_configurationset
from ..shared import deliveryoptions as shared_deliveryoptions
from ..shared import eventdestination as shared_eventdestination
from ..shared import reputationoptions as shared_reputationoptions
from ..shared import trackingoptions as shared_trackingoptions


@dataclasses.dataclass
class DescribeConfigurationSetResponse:
    r"""DescribeConfigurationSetResponse
    Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.
    """
    
    configuration_set: Optional[shared_configurationset.ConfigurationSet] = dataclasses.field(default=None)
    delivery_options: Optional[shared_deliveryoptions.DeliveryOptions] = dataclasses.field(default=None)
    event_destinations: Optional[list[shared_eventdestination.EventDestination]] = dataclasses.field(default=None)
    reputation_options: Optional[shared_reputationoptions.ReputationOptions] = dataclasses.field(default=None)
    tracking_options: Optional[shared_trackingoptions.TrackingOptions] = dataclasses.field(default=None)
    

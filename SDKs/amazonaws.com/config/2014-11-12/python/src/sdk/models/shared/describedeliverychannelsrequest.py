import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeDeliveryChannelsRequest:
    r"""DescribeDeliveryChannelsRequest
    The input for the <a>DescribeDeliveryChannels</a> action.
    """
    
    delivery_channel_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryChannelNames') }})
    

import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverychannelstatus as shared_deliverychannelstatus


@dataclass_json
@dataclasses.dataclass
class DescribeDeliveryChannelStatusResponse:
    r"""DescribeDeliveryChannelStatusResponse
    The output for the <a>DescribeDeliveryChannelStatus</a> action.
    """
    
    delivery_channels_status: Optional[list[shared_deliverychannelstatus.DeliveryChannelStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryChannelsStatus') }})
    

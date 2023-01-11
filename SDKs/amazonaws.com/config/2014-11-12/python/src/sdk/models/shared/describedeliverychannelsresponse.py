import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverychannel as shared_deliverychannel


@dataclass_json
@dataclasses.dataclass
class DescribeDeliveryChannelsResponse:
    r"""DescribeDeliveryChannelsResponse
    The output for the <a>DescribeDeliveryChannels</a> action.
    """
    
    delivery_channels: Optional[list[shared_deliverychannel.DeliveryChannel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryChannels') }})
    

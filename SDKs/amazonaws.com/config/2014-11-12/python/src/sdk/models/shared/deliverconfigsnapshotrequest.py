import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeliverConfigSnapshotRequest:
    r"""DeliverConfigSnapshotRequest
    The input for the <a>DeliverConfigSnapshot</a> action.
    """
    
    delivery_channel_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryChannelName') }})
    

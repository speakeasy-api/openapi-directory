import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverychannel as shared_deliverychannel


@dataclass_json
@dataclasses.dataclass
class PutDeliveryChannelRequest:
    r"""PutDeliveryChannelRequest
    The input for the <a>PutDeliveryChannel</a> action.
    """
    
    delivery_channel: shared_deliverychannel.DeliveryChannel = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryChannel') }})
    

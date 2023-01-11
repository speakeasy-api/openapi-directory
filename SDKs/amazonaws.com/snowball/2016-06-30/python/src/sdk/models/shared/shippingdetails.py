import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shipment as shared_shipment
from ..shared import shippingoption_enum as shared_shippingoption_enum


@dataclass_json
@dataclasses.dataclass
class ShippingDetails:
    r"""ShippingDetails
    A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
    """
    
    inbound_shipment: Optional[shared_shipment.Shipment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboundShipment') }})
    outbound_shipment: Optional[shared_shipment.Shipment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutboundShipment') }})
    shipping_option: Optional[shared_shippingoption_enum.ShippingOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    
